const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Nome do componente: ', (componentName) => {
  readline.close();

  const BASE_TEMPLATE_PATH = `src/core/components/templates/base`;
  const BASE_OUTPUT_PATH = `${__dirname}/generated/${componentName}`;

  const TEMPLATE_PATHS = {
    component: `${BASE_TEMPLATE_PATH}/BaseTemplate.component.tsx`,
    styles: `${BASE_TEMPLATE_PATH}/BaseTemplate.styles.ts`,
    mocks: `${BASE_TEMPLATE_PATH}/coverage/BaseTemplate.mocks.ts`,
    stories: `${BASE_TEMPLATE_PATH}/coverage/BaseTemplate.stories.tsx`,
    spec: `${BASE_TEMPLATE_PATH}/coverage/BaseTemplate.spec.tsx`,
  };

  const OUTPUT_PATHS = {
    component: `${BASE_OUTPUT_PATH}/${componentName}.component.tsx`,
    styles: `${BASE_OUTPUT_PATH}/${componentName}.styles.ts`,
    mocks: `${BASE_OUTPUT_PATH}/coverage/${componentName}.mocks.ts`,
    stories: `${BASE_OUTPUT_PATH}/coverage/${componentName}.stories.tsx`,
    spec: `${BASE_OUTPUT_PATH}/coverage/${componentName}.spec.tsx`,
  };

  fs.mkdirSync(BASE_OUTPUT_PATH);
  fs.mkdirSync(`${BASE_OUTPUT_PATH}/coverage`);

  Object.keys(TEMPLATE_PATHS).forEach((fileTypeKey) => {
    const template = fs.readFileSync(TEMPLATE_PATHS[fileTypeKey], 'utf8');

    const output = template.replace(/BaseTemplate/g, componentName);

    fs.writeFileSync(OUTPUT_PATHS[fileTypeKey], output, 'utf8');
  });

  console.log(`\n✔ Component "${componentName}" generated successfully!`);
});
