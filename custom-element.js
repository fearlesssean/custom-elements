document.addEventListener('DOMContentLoaded', () => {
  class MyCustomElement extends HTMLElement {
      async connectedCallback() {
        // Fetch the template HTML
        const response = await fetch('templates/my-custom-element-template.html');
        const templateText = await response.text();
    
        // Parse the fetched HTML and extract the template
        const templateContainer = document.createElement('div');
        templateContainer.innerHTML = templateText.trim();
        const template = templateContainer.querySelector('template');
    
        // Clone the template content
        const templateContent = template.content.cloneNode(true);
    
        // Modify the cloned content if necessary
        const title = this.getAttribute('title') || 'Default Title';
        templateContent.querySelector('.card-title').textContent = title;

        const text = this.getAttribute('text') || 'Default Title';
        templateContent.querySelector('.card-text').textContent = text;

        const link = this.getAttribute('link') || '#';
        const cardLink = templateContent.querySelector('.card-link');
        cardLink.textContent = link;
        cardLink.setAttribute('href', link); // Set the href attribute
    
        // Append the content to the custom element
        this.appendChild(templateContent);
      }
    }
    
    customElements.define('my-custom-element', MyCustomElement);
    
    class WorkoutForm extends HTMLElement {
      async connectedCallback() {
        // Fetch the template HTML
        const response = await fetch('templates/workout-form.html');
        const templateText = await response.text();
    
        // Parse the fetched HTML and extract the template
        const templateContainer = document.createElement('div');
        templateContainer.innerHTML = templateText.trim();
        const template = templateContainer.querySelector('template');
    
        // Clone the template content
        const templateContent = template.content.cloneNode(true);
    
        // Modify the cloned content if necessary
        const title = this.getAttribute('title') || 'Default Title';
        templateContent.querySelector('.cycle-title').textContent = title;

        const reps = this.getAttribute('reps') || 'Default Reps';
        templateContent.querySelector('.reps-amount').textContent = reps;

        const input = this.getAttribute('input') || '0';
        const cycleInput = templateContent.querySelector('.cycle-input');
        cycleInput.textContent = input;
        cycleInput.setAttribute('placeholder', input); // Set the href attribute

        const name = this.getAttribute('name') || 'Default name';
        const cycleTitle = templateContent.querySelector('.form-title');
        cycleTitle.textContent = name;
        cycleTitle.setAttribute('name', name); // Set the name attribute
        cycleTitle.setAttribute('value', name); // Set the value attribute
    
        // Append the content to the custom element
        this.appendChild(templateContent);
      }
    }
    
    customElements.define('cycle-form', WorkoutForm);
});