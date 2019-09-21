import PropTypes from "prop-types";

const Metadata = ({ version }) => (
  <span>
    تولید و توسعه نرم‌افزار توسط{" "}
    <a href="https://twitter.com/h003ein" target="_blank">
    حسین صفدری
    </a>{". "}
    ارسال بازخورد در{" "}
    <a href="https://github.com/gielcobben/Caption" target="_blank">
      تلگرام.
    </a>
    <style jsx>{`
      span {
        font-size: 14px;
        color: #666;
        list-style: none;
      }
    `}</style>
  </span>
);

Metadata.PropTypes = {
  version: PropTypes.string
};

export default Metadata;
