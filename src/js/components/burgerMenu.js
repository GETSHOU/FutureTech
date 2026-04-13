class BurgerMenu {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-menu-button]',
	};

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);

		if (!this.rootElement) {
			throw new Error('Root element не найден!');
		}

		this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton,
		);
		this.boundHandleBurgerButtonClick = this.onBurgerButtonClick.bind(this);
		this.bindEvents();
	}

	toggleBurgerMenu() {
		this.overlayElement.classList.toggle(this.stateClasses.isActive);
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		document.documentElement.classList.toggle(this.stateClasses.isLock);
	}

	onBurgerButtonClick() {
		this.toggleBurgerMenu();
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.boundHandleBurgerButtonClick);
	}
}

export default BurgerMenu;
