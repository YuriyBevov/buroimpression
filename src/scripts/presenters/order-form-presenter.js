import { render, RenderPosition } from "../utils/render";
import { FormType } from "../utils/const";

import OrderFormView from "../views/order-form-translate-view";
import AddFileView from "../views/add-file-view";

export default class OrderFormPresenter {
  #container = null;
  #viewType = null;
  #view = null;

  constructor(container, type) {
    this.#container = container;
    this.#viewType = type;
  }

  init = () => {
    console.log('INIT ORDER_FORM PRESENTER');
    const prev = this.#container.querySelector('[data-field]');

    if(prev) {
      prev.remove();
    }

    if(this.#viewType !== FormType.DEFAULT) {
      this.#view = new OrderFormView(this.#viewType);

      render(this.#container, this.#view);
      this.#view.setAddFileHandler();
    };
  }
}

/*import { render, RenderPosition, remove } from '../render';
import { filters } from '../const.js';
import CatalogContainerView from '../view/catalog-container-view';
import CatalogHeaderView from '../view/catalog-header-view';
import CatalogFilterContainerView from '../view/catalog-filter-container-view';
import CatalogListView from '../view/catalog-list-view';
import CatalogSidebarView from '../view/catalog-sidebar-view';
import CatalogFilterItemView from '../view/catalog-filter-item-view';
import ProductCardView from '../view/product-card-view';
import CatalogHeaderCountView from '../view/catalog-header-count-view';
import { SortType } from '../const';
import SortView from '../view/sort-view';

export default class CatalogPresenter {
  #catalogWrapper = null;
  #catalogContainer = new CatalogContainerView();
  #catalogList = new CatalogListView();
  #catalogHeader = new CatalogHeaderView();
  #catalogFilter = new CatalogFilterContainerView();
  #catalogSidebar = new CatalogSidebarView();

  #products = [];
  #filters = null;

  #sortComponent = null;
  #currentSortType = SortType.PRICE_UP;

  constructor(container) {
    this.#catalogWrapper = container;
  }

  init = (products) => {
    this.#products = [...products];
    this.#filters = filters;
    this.#renderCatalogHeader();
    this.#renderCatalog(this.#products);
    this.#renderSidebar();
  }

  #renderCatalogHeader = () => {
    render(this.#catalogContainer, this.#catalogHeader, RenderPosition.AFTERBEGIN);

    this.#renderTotalCountComponent(this.#products.length);
    this.#renderSort();
  }

  #renderTotalCountComponent = (count) => {
    render(this.#catalogHeader,new CatalogHeaderCountView(count));
  }

  //sortType передается во вьюхе: this._callback.sortTypeChange(evt.target.dataset.sortType);
  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearCatalog();
    this.#renderCatalogHeader();

    switch (sortType) {
      case SortType.PRICE_UP:
        this.#products.sort((a,b) => Number(b.price) - Number(a.price));
        break;
      case SortType.PRICE_DOWN:
        this.#products.sort((a,b) => Number(a.price) - Number(b.price));
        break;
      case SortType.POPULAR:
        this.#products.sort((a,b) => Number(b.watchedCount) - Number(a.watchedCount));
        break;
      case SortType.NEW:
        this.#products.sort((a,b) => new Date(b.dateFrom) - new Date(a.dateFrom));
        break;
      default:
        this.#products.sort((a,b) => Number(a.price) - Number(b.price));
    }

    this.#renderCatalog(this.#products);
  }

  #clearCatalog = () => {
    remove(this.#catalogHeader);
    remove(this.#catalogList);
  }

  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);

    render(this.#catalogHeader, this.#sortComponent);
  }

  #renderCatalog = (items) => {
    render(this.#catalogWrapper, this.#catalogContainer);
    render(this.#catalogContainer, this.#catalogList);

    this.#renderProducts(items);
  }

  #renderProducts = (items) => {
    items.forEach((product) => {
      this.#renderProduct(product);
    });
  }

  #renderProduct = (product,) => {
    render(this.#catalogList, new ProductCardView(product), RenderPosition.BEFOREEND);
  }

  #renderSidebar = () => {
    render(this.#catalogWrapper, this.#catalogSidebar, RenderPosition.AFTERBEGIN);

    this.#renderFilter();
  }

  #renderFilter = () => {
    render(this.#catalogSidebar, this.#catalogFilter);

    this.#filters.forEach((filter) => {
      render(this.#catalogFilter, new CatalogFilterItemView(filter));
    });
  }
}*/
