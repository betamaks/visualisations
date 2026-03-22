(function () {
  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function syncActive(elements, datasetKey, activeValue) {
    const target = String(activeValue);
    elements.forEach((element) => {
      element.classList.toggle("active", String(element.dataset[datasetKey]) === target);
    });
  }

  function bindDatasetClicks(elements, datasetKey, handler) {
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        handler(element.dataset[datasetKey], element);
      });
    });
  }

  function createAutoplayController(options) {
    const { length, interval, render, initialIndex = 0, autoplay = true, onAutoplayChange } = options;

    let current = initialIndex;
    let isAutoplay = autoplay;
    let autoplayListener = onAutoplayChange || null;
    let timer = null;

    function renderAt(index) {
      current = index;
      render(index);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      timer = window.setInterval(() => {
        renderAt((current + 1) % length);
      }, interval);
    }

    function setAutoplay(value) {
      isAutoplay = Boolean(value);
      if (autoplayListener) {
        autoplayListener(isAutoplay);
      }
      if (isAutoplay) {
        start();
      } else {
        stop();
      }
    }

    function toggleAutoplay() {
      setAutoplay(!isAutoplay);
    }

    function restartIfAutoplay() {
      if (isAutoplay) {
        start();
      }
    }

    function init() {
      renderAt(current);
      if (autoplayListener) {
        autoplayListener(isAutoplay);
      }
      if (isAutoplay) {
        start();
      }
    }

    return {
      current: () => current,
      init,
      isAutoplay: () => isAutoplay,
      render: renderAt,
      restartIfAutoplay,
      setAutoplayListener: (listener) => {
        autoplayListener = listener;
      },
      setAutoplay,
      start,
      stop,
      toggleAutoplay
    };
  }

  function bindPlayToggle(button, controller, labels = {}) {
    const onLabel = labels.on || "Pause Autoplay";
    const offLabel = labels.off || "Start Autoplay";

    function syncButton(active) {
      button.textContent = active ? onLabel : offLabel;
      button.classList.toggle("active", active);
    }

    controller.setAutoplayListener(syncButton);

    button.addEventListener("click", () => {
      controller.toggleAutoplay();
    });

    syncButton(controller.isAutoplay());
  }

  window.VetVisual = {
    bindDatasetClicks,
    bindPlayToggle,
    createAutoplayController,
    qsa,
    syncActive
  };
})();
