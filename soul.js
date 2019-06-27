const inputs = document.querySelectorAll('.control input');

function handleUpdate() {
    const suffix = this.dataset.percentage || this.dataset.degree || this.dataset.margin || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));