let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
   nav2 = document.getElementById('nav-head');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
  nav2.classList.toggle('is-open');
});

const hideValues = {
    hide: "hidden",
    show: "showme",
    double: "dblclick"
  };
  

  
  function toggleEventHandler(event) {
    const targetSelecor = event.target.dataset.target;
    const target = document.querySelector(targetSelecor);
    const showHide = target.dataset.hideme == hideValues.hide ? hideValues.show : hideValues.hide;
    const toggleTargets = document.querySelectorAll('.toggle-target');
    toggleTargets.forEach(el => {
      el.dataset.hideme = hideValues.hide;
    });
    target.dataset.hideme = showHide;
  }
  
  /* set up event handlers on the buttons */
  const options = {
    capture: true
  };
  /* we do this first to prevent the click from happening */
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(el => {
    el.addEventListener('click', toggleEventHandler, options)
  });


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('menuitem-anim');
        }
		else{
			entry.target.classList.remove('menuitem-anim');
		}
    });
});

const hidenElements = document.querySelectorAll('.menuitem');
hidenElements.forEach((el) => observer.observe(el))

    function toggleDiv() {
        const selectElement = document.getElementById('Question8');
        const additionalDiv = document.getElementById('additionalDiv');

        if (selectElement.value === 'Yes') {
            additionalDiv.style.display = 'block'; // Show the div
        } else {
            additionalDiv.style.display = 'none'; // Hide the div
        }
    }

    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    l = x.length;

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;

        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.addEventListener("click", function(e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;

                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;

                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");

                        // Check the selected value to show/hide the additional div
                        if (s.value === 'Yes') {
                            document.getElementById('additionalDiv').style.display = 'block';
                        } else {
                            document.getElementById('additionalDiv').style.display = 'none';
                        }

                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);

        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;

        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i);
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);