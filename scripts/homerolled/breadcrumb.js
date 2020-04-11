define([], () => {

    let breadcrumb = {
        set : function(hash) { 
            hash = hash.slice(1);
            let breadCrumb = document.getElementById('bootstrap-breadcrumb');
            if(!breadCrumb) { return; }
            while(breadCrumb.children.length > 0) { breadCrumb.removeChild(breadCrumb.firstChild); }

            let createLink = function(text, href, active) {
                let li = document.createElement('li');
                li.className = 'breadcrumb-item';

                let anchor = document.createElement('a');
                anchor.href = href;//'#' + paths.slice(0, i + 1).join('/');
                anchor.innerHTML = text;//(i===0) ? 'home' : p;
                li.appendChild(anchor);

                if(active) {
                    li.className = 'breadcrumb-item active';
                    li.setAttribute('aria-current', 'page');
                }
                return li;
            }

            breadCrumb.appendChild(createLink('home', '#', false));
            if(hash == ["home"]) { return; }

            let paths = hash.split('/');
            paths.forEach((p, i) => {
                let text = p;
                let href = '#' + paths.slice(0, i+1).join('/');
                let active = (i == paths.length-1);
                let li = createLink(text, href, active);

                breadCrumb.appendChild(li);
            });
        }
    } 
    
    return breadcrumb;
});