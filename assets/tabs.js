class Tabs extends HTMLElement {
  constructor() {
    super();
    this.titles = this.querySelectorAll('tab-title');
    this.contents = this.querySelectorAll('tab-content');
  }
  connectedCallback() {
    console.log('tabs');
  }
  removeActiveTab () {
    this.titles.forEach(title => {
      title.removeAttribute('active');
    });
  }
  removeActiveContent () {
    this.contents.forEach(content => {
      content.removeAttribute('active');
    });
  }
}

class TabTitle extends HTMLElement {
  constructor() {
    super();
    this.tabsContainer = this.closest('tabs-container');
  }
  connectedCallback() {
    this.addEventListener('click', () => {
      this.tabsContainer.removeActiveTab();
      this.setAttribute('active', '');
      this.tabsContainer.removeActiveContent();
      const index = this.getAttribute('index');
      const contentToShow = this.tabsContainer.querySelector(`tab-content[index="${index}"]`);
      contentToShow.setAttribute('active', '');
    });
  }
}

class TabContent extends HTMLElement {
  constructor() {
    super();
    this.tabsContainer = this.closest('tabs-container');
  }
  connectedCallback() {
    
  }
}

customElements.define('tabs-container', Tabs);
customElements.define('tab-title', TabTitle);
customElements.define('tab-content', TabContent);
