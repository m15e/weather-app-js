const helpr = (() => {
  const addChildren = (parent, items) => {
    items.forEach(el => {
      parent.appendChild(el);
    });
  };

  const qs = (selector) => document.querySelector(selector);

  const textEl = (elType, elText) => {
    const res = document.createElement(elType);
    res.innerHTML = elText;

    return res;
  };

  const classyDiv = (className) => {
    const res = document.createElement('div');
    res.setAttribute('class', className);

    return res;
  };

  const cel = (el, className = '') => {
    const res = document.createElement(el);
    if (className !== '') {
      res.setAttribute('class', className);
    }
    return res;
  };

  const nthParent = (elem, n) => (n === 0 ? elem : nthParent(elem.parentNode, n - 1));

  return {
    qs, addChildren, textEl, classyDiv, cel, nthParent,
  };
})();

export default helpr;