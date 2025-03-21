const templateAlertSucces = () => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
</svg>

<div class="alert alert-success d-flex align-items-center position-fixed bottom-0 start-0 mb-3 ms-3 animate__animated animate__fadeInLeft" style="z-index: 9999; padding: 0.5rem; width: 350px;"  role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div class="text-alert">
    Successfully added review
  </div>
  <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

const templateAlertErrorData = () => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  </symbol>
</svg>

<div class="alert alert-warning d-flex align-items-center position-fixed bottom-0 start-0 mb-3 ms-3 animate__animated animate__fadeInLeft" style="z-index: 9999; padding: 0.5rem; width: 350px;" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div class="text-alert">
    The submitted review is invalid
  </div>
  <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

const templateAlertErrorMain = () => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>

<div class="alert alert-danger d-flex align-items-center position-fixed bottom-0 start-0 mb-3 ms-3 animate__animated animate__fadeInLeft" style="z-index: 9999; padding: 0.5rem; width: 350px;" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div class="text-alert">
    Failed to submit review, please try again later
  </div>
  <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

export { templateAlertSucces, templateAlertErrorData, templateAlertErrorMain };
