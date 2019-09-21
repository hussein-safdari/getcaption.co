import css from "styled-jsx/css";

export default css.global`
  :root {
    --content-width: 640px;
    --content-padding: 60px;
    --brand-color: #007aff;
    --brand-gradient: linear-gradient(45deg, #00b9ff 0%, #003aff 100%);
    --brand-color-2: #0095ff;
  }

  @media (max-width: 1024px) {
    :root {
      --content-padding: 40px;
    }
  }
`;
