class BurgerMenu {
	static CONFIG = {
		selectors: {
			root: '[data-js-header]',
			overlay: '[data-js-header-overlay]',
			burgerButton: '[data-js-header-burger-menu-button]',
		},
		stateClasses: {
			isActive: 'is-active',
		},
	};

	constructor() {
		this.rootElement = document.querySelector(BurgerMenu.CONFIG.selectors.root);

		if (!this.rootElement) {
			throw new Error('Root element не найден!');
		}

		this.overlayElement = this.rootElement.querySelector(
			BurgerMenu.CONFIG.selectors.overlay,
		);
		this.burgerButtonElement = this.rootElement.querySelector(
			BurgerMenu.CONFIG.selectors.burgerButton,
		);
		this.boundHandleBurgerButtonClick = this.onBurgerButtonClick.bind(this);
		this.bindEvents();
	}

	toggleBurgerMenu() {
		this.overlayElement.classList.toggle(BurgerMenu.CONFIG.stateClasses.isActive);
		this.burgerButtonElement.classList.toggle(BurgerMenu.CONFIG.stateClasses.isActive);
	}

	onBurgerButtonClick() {
		this.toggleBurgerMenu();
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.boundHandleBurgerButtonClick);
	}
}

export default BurgerMenu;
