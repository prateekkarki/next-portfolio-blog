import { css, theme } from 'twin.macro';

export default css`
  .vertical-timeline {
    * {
      box-sizing: border-box;
    }

    width: 95%;
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    padding: 2em 0;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18px;
      height: 100%;
      width: 4px;
      background: ${theme`colors.white`};
    }

    &.vertical-timeline--one-column-right::before {
      right: 18px;
      left: unset;
    }
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 90%;

      &:before {
        left: 50%;
        margin-left: -2px;
      }
    }
  }

  .vertical-timeline-element {
    position: relative;
    margin: 2em 0;

    > div {
      min-height: 1px;
    }

    &:after {
      content: '';
      display: table;
      clear: both;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline-element {
      margin: 4em 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${theme`colors.white`},
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .vertical-timeline--one-column-right .vertical-timeline-element-icon {
    right: 0;
    left: unset;
  }

  .vertical-timeline-element-icon {
    svg {
      display: block;
      width: 24px;
      height: 24px;
      position: relative;
      left: 50%;
      top: 50%;
      margin-left: -12px;
      margin-top: -12px;
    }
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns .vertical-timeline-element-icon {
      width: 60px;
      height: 60px;
      left: 50%;
      margin-left: -30px;
    }
  }

  .vertical-timeline--animate .vertical-timeline-element-icon {
    &.is-hidden {
      visibility: hidden;
    }

    &.bounce-in {
      visibility: visible;
      animation: cd-bounce-1 0.6s;
    }
  }

  @keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    60% {
      opacity: 1;
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  .vertical-timeline-element-content {
    position: relative;
    margin-left: 60px;
    background: ${theme`colors.white`};
    border-radius: 0.25em;
    padding: 1em;
    box-shadow: 0 3px 0 ${theme`colors.light`};
  }

  .vertical-timeline--one-column-right .vertical-timeline-element-content {
    margin-right: 60px;
    margin-left: unset;
  }

  .vertical-timeline-element--no-children .vertical-timeline-element-content {
    background: 0 0;
    box-shadow: none;
  }

  .vertical-timeline-element-content {
    &:after {
      content: '';
      display: table;
      clear: both;
    }

    .vertical-timeline-element-date {
      font-size: 13px;
      font-size: 0.8125rem;
      font-weight: 500;
    }

    .vertical-timeline-element-date {
      display: inline-block;
    }
  }

  .vertical-timeline-element-title,
  .vertical-timeline-element-subtitle {
    margin: 0;
  }

  .vertical-timeline-element-content .vertical-timeline-element-date {
    float: left;
    padding: 0.8em 0;
    opacity: 0.7;
  }

  .vertical-timeline-element-content-arrow {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid ${theme`colors.white`};
  }

  .vertical-timeline--one-column-right {
    .vertical-timeline-element-content-arrow {
      content: '';
      position: absolute;
      top: 16px;
      right: unset;
      left: 100%;
      height: 0;
      width: 0;
      border: 7px solid transparent;
      border-left: 7px solid ${theme`colors.white`};
    }

    .vertical-timeline-element-content::before {
      left: 100%;
      border-left: 7px solid ${theme`colors.white`};
      border-right: unset;
    }
  }

  .vertical-timeline-element--no-children {
    .vertical-timeline-element-content::before,
    .vertical-timeline-element-content-arrow {
      display: none;
    }
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns {
      .vertical-timeline-element-content {
        margin-left: 0;
        padding: 1.5em;
        width: 44%;
      }

      .vertical-timeline-element-content-arrow {
        top: 24px;
        left: 100%;
        transform: rotate(180deg);
      }

      .vertical-timeline-element-content .vertical-timeline-element-date {
        position: absolute;
        width: 100%;
        left: 124%;
        top: 6px;
        font-size: 16px;
        font-size: 1rem;
      }

      .vertical-timeline-element {
        &.vertical-timeline-element--right .vertical-timeline-element-content,
        &:nth-of-type(even):not(.vertical-timeline-element--left)
          .vertical-timeline-element-content {
          float: right;
        }

        &.vertical-timeline-element--right
          .vertical-timeline-element-content-arrow,
        &:nth-of-type(even):not(.vertical-timeline-element--left)
          .vertical-timeline-element-content-arrow {
          top: 24px;
          left: auto;
          right: 100%;
          transform: rotate(0);
        }
      }
    }

    .vertical-timeline--one-column-right .vertical-timeline-element {
      &.vertical-timeline-element--right
        .vertical-timeline-element-content-arrow,
      &:nth-of-type(even):not(.vertical-timeline-element--left)
        .vertical-timeline-element-content-arrow {
        top: 24px;
        left: 100%;
        right: auto;
        transform: rotate(0);
      }
    }

    .vertical-timeline--two-columns .vertical-timeline-element {
      &.vertical-timeline-element--right
        .vertical-timeline-element-content
        .vertical-timeline-element-date,
      &:nth-of-type(even):not(.vertical-timeline-element--left)
        .vertical-timeline-element-content
        .vertical-timeline-element-date {
        left: auto;
        right: 124%;
        text-align: right;
      }
    }
  }

  .vertical-timeline--animate .vertical-timeline-element-content {
    &.is-hidden {
      visibility: hidden;
    }

    &.bounce-in {
      visibility: visible;
      animation: cd-bounce-2 0.6s;
    }
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns.vertical-timeline--animate
      .vertical-timeline-element {
      &.vertical-timeline-element--right
        .vertical-timeline-element-content.bounce-in,
      &:nth-of-type(even):not(.vertical-timeline-element--left)
        .vertical-timeline-element-content.bounce-in {
        animation: cd-bounce-2-inverse 0.6s;
      }
    }
  }

  @media only screen and (max-width: 1169px) {
    .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
      visibility: visible;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }

  @keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    60% {
      opacity: 1;
      transform: translateX(20px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    60% {
      opacity: 1;
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
