const ROOT_SELECTOR = '[data-js-tabs]';
const PANEL_SELECTOR = '[data-js-tabs-panel]';
const BUTTON_SELECTOR = '[data-js-tabs-button]';
const ACTIVE_CLASS = 'is-active';
const ATTRIBUTES = {
	TAB_INDEX: 'tabindex',
	ARIA_SELECTED: 'aria-selected',
};

class Tabs {
	constructor(root) {
		this.root = root;
		this.panels = [...this.root.querySelectorAll(PANEL_SELECTOR)];
		this.buttons = [...this.root.querySelectorAll(BUTTON_SELECTOR)];

		this.activeButtonIndex = 0;

		this.bindEvents();
	}

	onButtonClick(currentIndex) {
		if (currentIndex === this.activeButtonIndex) return;

		this.activeButtonIndex = currentIndex;

		this.render();
	}

	render() {
		this.buttons.forEach((button, currentIndex) => {
			const isActive = currentIndex === this.activeButtonIndex;

			button.classList.toggle(ACTIVE_CLASS, isActive);
			button.setAttribute(ATTRIBUTES.ARIA_SELECTED, String(isActive));
			button.setAttribute(ATTRIBUTES.TAB_INDEX, isActive ? '0' : '-1');
		});

		this.panels.forEach((panel, currentIndex) => {
			const isActive = currentIndex === this.activeButtonIndex;

			panel.classList.toggle(ACTIVE_CLASS, isActive);
		});
	}

	bindEvents() {
		this.buttons.forEach((button, currentIndex) => {
			button.addEventListener('click', () => this.onButtonClick(currentIndex));
		});
	}
}

class TabsCollection {
	constructor() {
		this.init();
	}

	init() {
		document.querySelectorAll(ROOT_SELECTOR).forEach(element => {
			new Tabs(element);
		});
	}
}

export default TabsCollection;
