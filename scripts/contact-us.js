$(() => {
  initRequiredFieldsSignaling();
  initEventHandlersOfRequiredFields();


  function initRequiredFieldsSignaling() {
    $(".required-field").siblings("label").append("<span class='required-field-span'>&nbsp;*</span>");
  }


  function initEventHandlersOfRequiredFields() {
    $(".required-field").on("click", event => {
      const element = event.target;
      if (element.value == "") {
        element.classList.remove("is-invalid");
      }
    });
  }
})