import { css } from 'lit-element';

export const styles = css`
  ha-card {
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
  }
  ha-card.disabled {
    pointer-events: none;
    cursor: default;
  }
  ha-icon {
    display: inline-block;
    margin: auto;
  }
  ha-card.button-card-main {
    padding: 4% 0px;
    text-transform: none;
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
    text-align: center;
    letter-spacing: normal;
    width: 100%;
  }
  div {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  #overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: right;
    z-index: 1;
  }
  #lock {
    margin-top: 8px;
    opacity: 0.5;
    margin-right: 7px;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @keyframes fadeOut{
    0% {opacity: 0.5;}
    20% {opacity: 0;}
    80% {opacity: 0;}
    100% {opacity: 0.5;}
  }
  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
  @keyframes blink{
    0%{opacity:0;}
    50%{opacity:1;}
    100%{opacity:0;}
  }
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  [rotating] {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  .container {
    display: grid;
    max-height: 100%;
    text-align: center;
    height: 100%;
    align-items: center;
  }
  .img-cell {
    grid-area: i;
    height: 100%;
    width: 100%;
    max-width: 100%;
  }

  .icon {
    height: 100%;
    max-width: 100%;
    object-fit: scale;
    overflow: hidden;
  }
  .name {
    grid-area: n;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }
  .state {
    grid-area: s;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    /* margin: auto; */
  }

  .label {
    grid-area: l;
    max-width: 100%;
    align-self: center;
    justify-self: center;
  }

  .container.vertical {
    grid-template-areas: "i" "n" "s" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content min-content;
  }
  /* Vertical No Icon */
  .container.vertical.no-icon {
    grid-template-areas: "n" "s" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  .container.vertical.no-icon .state {
    align-self: center;
  }
  .container.vertical.no-icon .name {
    align-self: end;
  }
  .container.vertical.no-icon .label {
    align-self: start;
  }

  /* Vertical No Icon No Name */
  .container.vertical.no-icon.no-name {
    grid-template-areas: "s" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.vertical.no-icon.no-name .state {
    align-self: end;
  }
  .container.vertical.no-icon.no-name .label {
    align-self: start;
  }

  /* Vertical No Icon No State */
  .container.vertical.no-icon.no-state {
    grid-template-areas: "n" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.vertical.no-icon.no-state .name {
    align-self: end;
  }
  .container.vertical.no-icon.no-state .label {
    align-self: start;
  }

  /* Vertical No Icon No Label */
  .container.vertical.no-icon.no-label {
    grid-template-areas: "n" "s";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.vertical.no-icon.no-label .name {
    align-self: end;
  }
  .container.vertical.no-icon.no-label .state {
    align-self: start;
  }

  /* Vertical No Icon No Label No Name */
  .container.vertical.no-icon.no-label.no-name {
    grid-template-areas: "s";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .container.vertical.no-icon.no-label.no-name .state {
    align-self: center;
  }
  /* Vertical No Icon No Label No State */
  .container.vertical.no-icon.no-label.no-state {
    grid-template-areas: "n";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .container.vertical.no-icon.no-label.no-state .name {
    align-self: center;
  }

  /* Vertical No Icon No Name No State */
  .container.vertical.no-icon.no-name.no-state {
    grid-template-areas: "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .container.vertical.no-icon.no-name.no-state .label {
    align-self: center;
  }

  .container.icon_name_state {
    grid-template-areas: "i n" "l l";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content;
  }

  .container.icon_name {
    grid-template-areas: "i n" "s s" "l l";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  .container.icon_state {
    grid-template-areas: "i s" "n n" "l l";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }

  .container.name_state {
    grid-template-areas: "i" "n" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
  .container.name_state.no-icon {
    grid-template-areas: "n" "l";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.name_state.no-icon .name {
    align-self: end
  }
  .container.name_state.no-icon .label {
    align-self: start
  }

  .container.name_state.no-icon.no-label {
    grid-template-areas: "n";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .container.name_state.no-icon.no-label .name {
    align-self: center
  }

  /* icon_name_state2nd default */
  .container.icon_name_state2nd {
    grid-template-areas: "i n" "i s" "i l";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  .container.icon_name_state2nd .name {
    align-self: end;
  }
  .container.icon_name_state2nd .state {
    align-self: center;
  }
  .container.icon_name_state2nd .label {
    align-self: start;
  }

  /* icon_name_state2nd No Label */
  .container.icon_name_state2nd.no-label {
    grid-template-areas: "i n" "i s";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.icon_name_state2nd .name {
    align-self: end;
  }
  .container.icon_name_state2nd .state {
    align-self: start;
  }

  /* icon_state_name2nd Default */
  .container.icon_state_name2nd {
    grid-template-areas: "i s" "i n" "i l";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content 1fr;
  }
  .container.icon_state_name2nd .state {
    align-self: end;
  }
  .container.icon_state_name2nd .name {
    align-self: center;
  }
  .container.icon_state_name2nd .state {
    align-self: start;
  }

  /* icon_state_name2nd No Label */
  .container.icon_state_name2nd.no-label {
    grid-template-areas: "i s" "i n";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .container.icon_state_name2nd .state {
    align-self: end;
  }
  .container.icon_state_name2nd .name {
    align-self: start;
  }

  .container.icon_label {
    grid-template-areas: "i l" "n n" "s s";
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr min-content min-content;
  }
`;

export default styles;
