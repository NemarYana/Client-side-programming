'use strict';

(function() {
    window.renderCard = function(frm) {
      let workspace = frm.closest('.workspace');

      for (let element of frm.elements) {
        let fieldName = element.name;
        if (!fieldName) {
          continue;
        }
        let field = workspace.querySelector('.b-card__' + fieldName);
        if (field) {
          field.textContent = frm[fieldName].value;
        }
      }

      return false;
    }
})();