const form = document.querySelector('#certificate-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get the form data
	const clientName = form['client-name'].value;
	const companyName = form['company-name'].value;
	const vehicleMake = form['vehicle-make'].value;
	const vehicleModel = form['vehicle-model'].value;
	const vehicleRegistration = form['vehicle-registration'].value;
	const dateOfInstallation = form['date-of-installation'].value;
	const technicianName = form['technician-name'].value;
	const technicianSignature = form['technician-signature'].value;

	// Set the data to the certificate
	document.querySelector('#client-name').textContent = clientName;
	document.querySelector('#company-name').textContent = companyName;
	document.querySelector('#vehicle-make').textContent = vehicleMake;
	document.querySelector('#vehicle-model').textContent = vehicleModel;
	document.querySelector('#vehicle-registration').textContent = vehicleRegistration;
	document.querySelector('#date-of-installation').textContent = dateOfInstallation;
	document.querySelector('#technician-name').textContent = technicianName;
	document.querySelector('#technician-signature').textContent = technicianSignature;

	// Show the certificate
	form.style.display = 'none';
	const certificate = document.querySelector('#certificate');
	certificate.style.display = 'block';

	// Generate the PDF file
	html2pdf().set({
		margin: 0,
		filename: 'certificate.pdf',
		image: {
			type: 'jpeg',
			quality: 0.98
		},
		html2canvas: {
			scale: 2
		},
		jsPDF: {
			unit: 'in',
			format: 'letter',
			orientation: 'portrait'
		}
	}).from(certificate).save();
});

// Print or save the certificate as a PDF file
window.addEventListener('afterprint', () => {
	form.style.display = 'block';
	const certificate = document.querySelector('#certificate');
	certificate.style.display = 'none';
});
