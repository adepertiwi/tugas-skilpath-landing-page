
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  const formData = {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
  }

  return formData;

}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsChecked() {
  const status = document.getElementById("status");
  return status.checked;
}

function validateFormData(formData) {
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
      console.log('Data Form Valid');
      return true;
  } else {
      console.log('Data Form Tidak Valid');
      return false;
  }
}

function submit() {
  const formData = handleGetFormData();
  if (validateFormData(formData)) {
      document.getElementById('warning').textContent = "Data Form Berhasil Terkirim";
  } else {
      document.getElementById('warning').textContent = "Lengkapi Pengisian Data Form";
  }
}

document.querySelector('form').addEventListener("submit", event => {
  event.preventDefault();
  submit();
})