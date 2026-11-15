'use strict';

(function() {
    let options = {
        textAlign: 'align',
        fontSize: 'font-size',
        color: 'color'
    };

    window.renderCard = function(frm) {
      let workspace = frm.closest('.workspace');

      for (let element of frm.elements) {
        let fieldName = element.name;
        if (!fieldName) {
          continue;
        }

        if (fieldName.endsWith('-visible')) {
          let contact = workspace.querySelector('.b-card__' + fieldName.replace('-visible', ''));
          if (contact) {
            contact.hidden = !element.checked;
            }
            continue;
          }

        let field = workspace.querySelector('.b-card__' + fieldName);
        if (field) {
          field.textContent = frm[fieldName].value;

          for (let option in options) {
            let value = frm[fieldName + '-' + options[option]]?.value;
            if (value) { field.style[option] = value; }
          }
        }
      }

      return false;
    }
})();