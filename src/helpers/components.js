const getComponent = async componentName => {
  const importComponent = () => import(`~/components/${componentName}`);
  return await importComponent();
};

export default {
  getComponent
};
