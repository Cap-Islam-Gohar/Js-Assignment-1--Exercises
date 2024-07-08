import Alpine from 'alpinejs'
import { codeToHtml } from 'shiki/bundle/web'
import morph from '@alpinejs/morph';
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse);
Alpine.plugin(morph);

document.addEventListener("DOMContentLoaded", () => {


    async function generateHeighlighedCode (content, callback){
        const code = await codeToHtml( content , {
            lang: 'javascript',
            theme: 'dark-plus'
        });

        callback(code)
    }  

    function generateHtmlCodeOn (el, content){
        content = content.split("<script")[0];
        content = content.toString().replaceAll("\n\t", "\n");
        generateHeighlighedCode(content, (code) => {
            el.innerHTML = code;
        });
    }

    function getTemplate() {
                    
        let stringTemplate = `
        <div x-tabs class="py-10 border-b-2 border-[#2e2e2e] flex flex-col gap-y-3 h-auto">
                    
            <div x-toggle class="flex justify-between cursor-pointer">
                <h2 class="font-extrabold">Question <span x-number></span></h2>
                <div>
                    <svg x-close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 md:size-6">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                    <svg x-open xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 md:size-6">
                        <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>			

            <div x-open class="bg-[#1E1E1E] rounded-md overflow-hidden">            
                <ul class="flex bg-[#2E2E2E]">
                    <li x-tab class="px-8 py-2 cursor-pointer border-red-400 rounded-t-sm">Q</li>
                    <li x-tab class="px-8 py-2 cursor-pointer border-red-400 rounded-t-sm">Html</li>
                    <li x-tab class="px-8 py-2 cursor-pointer border-red-400 rounded-t-sm">Js</li>
                    <li x-tab class="px-8 py-2 cursor-pointer border-red-400 rounded-t-sm text-green-400">Run</li>
                </ul>

                <div class="px-2">
                    <div x-panel class="py-4"></div>
                    <div x-panel class="editor overflow-x-auto"></div>
                    <div x-panel class="editor overflow-x-auto"></div>
                    <div x-panel class="p-4"></div>
                </div>
            </div>	

        </div>`;

        return stringTemplate;

        const div = document.createElement("div");
        div.innerHTML = stringTemplate;
        return div;
    }

    function generateJSCodeOn(el, src){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src);
        xhr.onreadystatechange = function (){
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
                let response = xhr.responseText.split('//# sourceMappingURL=');
                generateHeighlighedCode(response[0], (code) => {
                    el.innerHTML = code;
                });
            }
        };
        xhr.send();
    }

    function makeFrameOn(el, src, callback){
        let iFrame = document.createElement("iframe");
        iFrame.height = "100%";
        iFrame.width = "100%";
        iFrame.src = src;

        el.appendChild(iFrame);  

        iFrame.addEventListener('load', (e) => {

            if(e.target.contentWindow.Alpine === undefined){

                let css = document.createElement("link");
                css.type = "text/css";
                css.rel = "stylesheet";
                let links = document.head.querySelectorAll("link");
                css.href = links[links.length -1].href;
                e.target.contentDocument.head.appendChild(css);        

                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = `script.js`;
                e.target.contentDocument.body.appendChild(script);

                callback(e); 
                
            }else{
                el.innerHTML = 'you didnt anser this question';
            }    
        });
    }

    document.querySelectorAll("[x-question]").forEach((el, index) => {
        let number = index + 1;
        el.setAttribute("x-data", `{number: ${number}}`);
    });

    document.addEventListener("alpine:init", () => {

        Alpine.data('tabs', (e = {index: 0}) => {
            return {
                show: false,
                defaultIndex: e.index,
                init(){
                    this.tabs = Array.from(this.$el.querySelectorAll("[x-tab]"));
                    this.panels = Array.from(this.$el.querySelectorAll("[x-panel]"));

                    this.$watch('show', (show) => {
                        if(show && this.panels[3].innerHTML === ""){
                            makeFrameOn(this.panels[3], `questions/${this.number}/index.html`, (e) => {
                                generateHtmlCodeOn(this.panels[1], e.target.contentDocument.body.innerHTML);
                                generateJSCodeOn(this.panels[2], `questions/${this.number}/script.js`);
                            });
                        }
                    });

                    this.$watch('defaultIndex', (index) => {
                        if(index == 3){
                            this.$nextTick(() => {
                                let frame = this.panels[3].firstElementChild;
                                let height = frame?.contentDocument?.body.offsetHeight + 50;
                                frame?.setAttribute("height", height + "px");                                    
                            });
                        }
                    });
                },
                triggerNumber: {
                    ['x-text'](){
                        return this.number;
                    }
                },
                currentTab (el) {
                    return this.defaultIndex == this.tabs.indexOf(el);
                },
                currentPanel(el){
                    return this.defaultIndex == this.panels.indexOf(el);
                },
                activeTab(el){
                    if(this.tabs.indexOf(el) != this.defaultIndex){
                        this.defaultIndex = this.tabs.indexOf(el);
                    }
                },
                tab: () => {
                    return {
                        triggerTab: {
                            ['x-bind:class'](){
                                return this.currentTab(this.$el) && 'bg-[#1E1E1E] border-t';
                            },
                            ['x-on:click']() {
                                return this.activeTab(this.$el);
                            }
                        }
                    }
                },
                panel: () => {
                    return {
                        triggerPanel: {
                            ['x-show']() {
                                return this.currentPanel(this.$el);
                            },
                            ['x-cloak'](){
                                return true;
                            }
                        }
                    }
                }
                
            }
        });

        Alpine.directive('question', (el) => {  
            const desc = el.innerHTML;
            el.innerHTML = getTemplate();
            el.querySelector('[x-panel]').innerHTML = desc;
            el.style.opacity = 1;
        });
            

        Alpine.directive('tabs', (el) => {  
            el.setAttribute("x-data", 'tabs');
        });

        Alpine.directive('tab', (el) => {
            el.setAttribute("x-data", 'tab');
            el.setAttribute("x-bind", 'triggerTab');        
        });

        Alpine.directive('panel', (el) => {
            el.setAttribute("x-data", 'panel');
            el.setAttribute("x-bind", 'triggerPanel');
        });

        Alpine.directive('toggle', (el) => {
            el.setAttribute("x-on:click", 'show = !show');
        });

        Alpine.directive('open', (el) => {
            el.setAttribute("x-show", 'show');
            el.setAttribute("x-cloak", "");
        });

        Alpine.directive('close', (el) => {
            el.setAttribute("x-show", '!show');
            el.setAttribute("x-cloak", "");
        });

        Alpine.directive('number', (el) => {
            el.setAttribute("x-bind", 'triggerNumber');
        });

        
        
    });

    window.Alpine = Alpine;
    window.Alpine.start();

});