const Social = () => (
  <ul>
    <li>
      <div
        className="fb-like"
        data-href="http://getSub.ir"
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-show-faces="false"
        data-share="false"
      />
    </li>
    <li>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-text="Caption – Start watching. "
        data-url="http://getsub.ir/"
        data-via="getSub"
        data-hashtags="getSub"
        data-related=""
        data-show-count="false"
      >
        Tweet
      </a>
    </li>
    <li>
      <a
        className="github-button"
        href="https://github.com/gielcobben/caption"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star gielcobben/caption on GitHub"
      >
        Star
      </a>
    </li>

    <style jsx>{`
      ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        list-style: none;
        margin: 0;
        font-size: 14px;
      }

      @media (max-width: 800px) {
        ul {
          max-width: 252px;
          margin: auto;
        }
      }

      li {
        margin: 0;
        margin-left: 16px;
        font-weight: bold;
        color: #666;
      }

      a {
        color: rgba(0, 0, 0, 0.6);
        font-weight: normal;
      }
    `}</style>

    <style jsx global>{`
      .fb-like span {
        vertical-align: top !important;
      }
    `}</style>
  </ul>
);

export default Social;
