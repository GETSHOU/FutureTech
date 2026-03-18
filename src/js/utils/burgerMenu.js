class BurgerMenu {
	#dataAttributes = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	};

	#stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	#rootElement;
	#overlayElement;
	#burgerButtonElement;
	#boundHandleBurgerButtonClick;

	constructor() {
		this.#rootElement = document.querySelector(this.#dataAttributes.root);
		this.#overlayElement = this.#rootElement.querySelector(this.#dataAttributes.overlay);
		this.#burgerButtonElement = this.#rootElement.querySelector(
			this.#dataAttributes.burgerButton,
		);
		this.#boundHandleBurgerButtonClick = this.onBurgerButtonClick.bind(this);
		this.bindEvents();
	}

	toggleBurgerMenu() {
		this.#overlayElement.classList.toggle(this.#stateClasses.isActive);
		this.#burgerButtonElement.classList.toggle(this.#stateClasses.isActive);
		document.documentElement.classList.toggle(this.#stateClasses.isLock);
	}

	onBurgerButtonClick() {
		this.toggleBurgerMenu();
	}

	bindEvents() {
		this.#burgerButtonElement.addEventListener(
			'click',
			this.#boundHandleBurgerButtonClick,
		);
	}
}

export default BurgerMenu;
