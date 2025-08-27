const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => {
        const event = new CustomEvent('webVitalsMetric', { detail: metric });
        window.dispatchEvent(event);
        onPerfEntry(metric);
      });
      getFID(metric => {
        const event = new CustomEvent('webVitalsMetric', { detail: metric });
        window.dispatchEvent(event);
        onPerfEntry(metric);
      });
      getFCP(metric => {
        const event = new CustomEvent('webVitalsMetric', { detail: metric });
        window.dispatchEvent(event);
        onPerfEntry(metric);
      });
      getLCP(metric => {
        const event = new CustomEvent('webVitalsMetric', { detail: metric });
        window.dispatchEvent(event);
        onPerfEntry(metric);
      });
      getTTFB(metric => {
        const event = new CustomEvent('webVitalsMetric', { detail: metric });
        window.dispatchEvent(event);
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;
