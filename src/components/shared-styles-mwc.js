/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const MWCSharedStyle = css`
    /*!
    Material Components for the Web
    Copyright (c) 2019 Google Inc.
    License: MIT
    */
    .mdc-button {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 8px 0 8px;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    height: 36px;
    border: none;
    outline: none;
    /* @alternate */
    line-height: inherit;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-appearance: none;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 4px;
    }
    .mdc-button::-moz-focus-inner {
    padding: 0;
    border: 0;
    }
    .mdc-button:active {
    outline: none;
    }
    .mdc-button:hover {
    cursor: pointer;
    }
    .mdc-button:disabled {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.37);
    cursor: default;
    pointer-events: none;
    }
    .mdc-button.mdc-button--dense {
    border-radius: 4px;
    }
    .mdc-button:not(:disabled) {
    background-color: transparent;
    }
    .mdc-button .mdc-button__icon {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 18px;
    vertical-align: top;
    }
    [dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }
    .mdc-button:not(:disabled) {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }

    .mdc-button__label + .mdc-button__icon {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    }

    svg.mdc-button__icon {
    fill: currentColor;
    }

    .mdc-button--raised .mdc-button__icon,
    .mdc-button--unelevated .mdc-button__icon,
    .mdc-button--outlined .mdc-button__icon {
    /* @noflip */
    margin-left: -4px;
    /* @noflip */
    margin-right: 8px;
    }
    [dir=rtl] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl],
    [dir=rtl] .mdc-button--unelevated .mdc-button__icon,
    .mdc-button--unelevated .mdc-button__icon[dir=rtl],
    [dir=rtl] .mdc-button--outlined .mdc-button__icon,
    .mdc-button--outlined .mdc-button__icon[dir=rtl] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: -4px;
    }
    .mdc-button--raised .mdc-button__label + .mdc-button__icon,
    .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
    .mdc-button--outlined .mdc-button__label + .mdc-button__icon {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: -4px;
    }
    [dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl],
    [dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
    .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl],
    [dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon,
    .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {
    /* @noflip */
    margin-left: -4px;
    /* @noflip */
    margin-right: 8px;
    }

    .mdc-button--raised,
    .mdc-button--unelevated {
    padding: 0 16px 0 16px;
    }
    .mdc-button--raised:disabled,
    .mdc-button--unelevated:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-button--raised:not(:disabled),
    .mdc-button--unelevated:not(:disabled) {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-button--raised:not(:disabled),
    .mdc-button--unelevated:not(:disabled) {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    .mdc-button--raised:not(:disabled),
    .mdc-button--unelevated:not(:disabled) {
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff);
    }

    .mdc-button--raised {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-button--raised:hover, .mdc-button--raised:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    .mdc-button--raised:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    .mdc-button--raised:disabled {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-button--outlined {
    border-style: solid;
    padding: 0 14px 0 14px;
    border-width: 2px;
    }
    .mdc-button--outlined:disabled {
    border-color: rgba(0, 0, 0, 0.37);
    }
    .mdc-button--outlined:not(:disabled) {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    }

    .mdc-button--dense {
    height: 32px;
    font-size: 0.8125rem;
    }

    @-webkit-keyframes mdc-ripple-fg-radius-in {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
                transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
        -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
                transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    }

    @keyframes mdc-ripple-fg-radius-in {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
                transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
        -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
                transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    }
    @-webkit-keyframes mdc-ripple-fg-opacity-in {
    from {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        opacity: 0;
    }
    to {
        opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    }
    @keyframes mdc-ripple-fg-opacity-in {
    from {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        opacity: 0;
    }
    to {
        opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    }
    @-webkit-keyframes mdc-ripple-fg-opacity-out {
    from {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
        opacity: 0;
    }
    }
    @keyframes mdc-ripple-fg-opacity-out {
    from {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
        opacity: 0;
    }
    }
    .mdc-ripple-surface--test-edge-var-bug {
    --mdc-ripple-surface-test-edge-var: 1px solid #000;
    visibility: hidden;
    }
    .mdc-ripple-surface--test-edge-var-bug::before {
    border: var(--mdc-ripple-surface-test-edge-var);
    }

    .mdc-button {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-button::before, .mdc-button::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-button::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-button.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-button.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-button.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-button.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-button::before, .mdc-button::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-button.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-button::before, .mdc-button::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-button::before, .mdc-button::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    .mdc-button:hover::before {
    opacity: 0.04;
    }
    .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    .mdc-button--raised::before, .mdc-button--raised::after,
    .mdc-button--unelevated::before,
    .mdc-button--unelevated::after {
    background-color: #fff;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-button--raised::before, .mdc-button--raised::after,
    .mdc-button--unelevated::before,
    .mdc-button--unelevated::after {
        /* @alternate */
        background-color: var(--mdc-theme-on-primary, #fff);
    }
    }
    .mdc-button--raised:hover::before,
    .mdc-button--unelevated:hover::before {
    opacity: 0.08;
    }
    .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,
    .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,
    .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-button--raised:not(.mdc-ripple-upgraded)::after,
    .mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,
    .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-button--raised.mdc-ripple-upgraded,
    .mdc-button--unelevated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }

    .mdc-card {
    border-radius: 4px;
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    }

    .mdc-card--outlined {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    }

    .mdc-card__media {
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
    .mdc-card__media::before {
    display: block;
    content: "";
    }

    .mdc-card__media:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    }

    .mdc-card__media:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    }

    .mdc-card__media--square::before {
    margin-top: 100%;
    }

    .mdc-card__media--16-9::before {
    margin-top: 56.25%;
    }

    .mdc-card__media-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    }

    .mdc-card__primary-action {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    }

    .mdc-card__primary-action:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    }

    .mdc-card__primary-action:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    }

    .mdc-card__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    min-height: 52px;
    padding: 8px;
    }

    .mdc-card__actions--full-bleed {
    padding: 0;
    }

    .mdc-card__action-buttons,
    .mdc-card__action-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    }

    .mdc-card__action-icons {
    color: rgba(0, 0, 0, 0.6);
    flex-grow: 1;
    justify-content: flex-end;
    }

    .mdc-card__action-buttons + .mdc-card__action-icons {
    /* @noflip */
    margin-left: 16px;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-card__action-buttons + .mdc-card__action-icons, .mdc-card__action-buttons + .mdc-card__action-icons[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 16px;
    }

    .mdc-card__action {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    .mdc-card__action:focus {
    outline: none;
    }

    .mdc-card__action--button {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    padding: 0 8px;
    }
    [dir=rtl] .mdc-card__action--button, .mdc-card__action--button[dir=rtl] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }
    .mdc-card__action--button:last-child {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-card__action--button:last-child, .mdc-card__action--button:last-child[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-card__actions--full-bleed .mdc-card__action--button {
    justify-content: space-between;
    width: 100%;
    height: auto;
    max-height: none;
    margin: 0;
    padding: 8px 16px;
    /* @noflip */
    text-align: left;
    }
    [dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button, .mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl] {
    /* @noflip */
    text-align: right;
    }

    .mdc-card__action--icon {
    margin: -6px 0;
    padding: 12px;
    }

    .mdc-card__action--icon:not(:disabled) {
    color: rgba(0, 0, 0, 0.6);
    }

    .mdc-card__primary-action {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-card__primary-action::before, .mdc-card__primary-action::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-card__primary-action::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-card__primary-action.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-card__primary-action.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-card__primary-action::before, .mdc-card__primary-action::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-card__primary-action.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-card__primary-action::before, .mdc-card__primary-action::after {
    background-color: #000;
    }
    .mdc-card__primary-action:hover::before {
    opacity: 0.04;
    }
    .mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before, .mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-card__primary-action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-card__primary-action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    @-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path {
    0%, 50% {
        stroke-dashoffset: 29.7833385;
    }
    50% {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
        stroke-dashoffset: 0;
    }
    }

    @keyframes mdc-checkbox-unchecked-checked-checkmark-path {
    0%, 50% {
        stroke-dashoffset: 29.7833385;
    }
    50% {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
        stroke-dashoffset: 0;
    }
    }
    @-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
    0%, 68.2% {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
    }
    68.2% {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);
                animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
    100% {
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
    }
    }
    @keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
    0%, 68.2% {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
    }
    68.2% {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);
                animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
    100% {
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
    }
    }
    @-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
                animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
        opacity: 1;
        stroke-dashoffset: 0;
    }
    to {
        opacity: 0;
        stroke-dashoffset: -29.7833385;
    }
    }
    @keyframes mdc-checkbox-checked-unchecked-checkmark-path {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
                animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
        opacity: 1;
        stroke-dashoffset: 0;
    }
    to {
        opacity: 0;
        stroke-dashoffset: -29.7833385;
    }
    }
    @-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    to {
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        opacity: 0;
    }
    }
    @keyframes mdc-checkbox-checked-indeterminate-checkmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    to {
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        opacity: 0;
    }
    }
    @-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
                animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
        opacity: 1;
    }
    }
    @keyframes mdc-checkbox-indeterminate-checked-checkmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
                animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
        opacity: 1;
    }
    }
    @-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark {
    from {
        -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;
                animation-timing-function: mdc-animation-deceleration-curve-timing-function;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        opacity: 0;
    }
    to {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    }
    @keyframes mdc-checkbox-checked-indeterminate-mixedmark {
    from {
        -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;
                animation-timing-function: mdc-animation-deceleration-curve-timing-function;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        opacity: 0;
    }
    to {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    }
    @-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
                animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    to {
        -webkit-transform: rotate(315deg);
                transform: rotate(315deg);
        opacity: 0;
    }
    }
    @keyframes mdc-checkbox-indeterminate-checked-mixedmark {
    from {
        -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
                animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        opacity: 1;
    }
    to {
        -webkit-transform: rotate(315deg);
                transform: rotate(315deg);
        opacity: 0;
    }
    }
    @-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
    0% {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
        opacity: 1;
    }
    32.8%, 100% {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
        opacity: 0;
    }
    }
    @keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
    0% {
        -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
        opacity: 1;
    }
    32.8%, 100% {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
        opacity: 0;
    }
    }
    .mdc-checkbox {
    display: inline-block;
    position: relative;
    flex: 0 0 18px;
    box-sizing: content-box;
    width: 18px;
    height: 18px;
    padding: 11px;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: bottom;
    }

    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
    }

    .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
    .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-theme-secondary, #018786);
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    }

    @-webkit-keyframes mdc-checkbox-fade-in-background-0 {
    0% {
        border-color: rgba(0, 0, 0, 0.54);
        background-color: transparent;
    }
    50% {
        border-color: #018786;
        /* @alternate */
        border-color: var(--mdc-theme-secondary, #018786);
        background-color: #018786;
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }

    @keyframes mdc-checkbox-fade-in-background-0 {
    0% {
        border-color: rgba(0, 0, 0, 0.54);
        background-color: transparent;
    }
    50% {
        border-color: #018786;
        /* @alternate */
        border-color: var(--mdc-theme-secondary, #018786);
        background-color: #018786;
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    @-webkit-keyframes mdc-checkbox-fade-out-background-0 {
    0%, 80% {
        border-color: #018786;
        /* @alternate */
        border-color: var(--mdc-theme-secondary, #018786);
        background-color: #018786;
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    100% {
        border-color: rgba(0, 0, 0, 0.54);
        background-color: transparent;
    }
    }
    @keyframes mdc-checkbox-fade-out-background-0 {
    0%, 80% {
        border-color: #018786;
        /* @alternate */
        border-color: var(--mdc-theme-secondary, #018786);
        background-color: #018786;
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    100% {
        border-color: rgba(0, 0, 0, 0.54);
        background-color: transparent;
    }
    }
    .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-0;
            animation-name: mdc-checkbox-fade-in-background-0;
    }
    .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-0;
            animation-name: mdc-checkbox-fade-out-background-0;
    }

    .mdc-checkbox__checkmark {
    color: #fff;
    }

    .mdc-checkbox__mixedmark {
    border-color: #fff;
    }

    .mdc-checkbox__background::before {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-checkbox__background::before {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }

    .mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.26);
    }

    .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
    .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.26);
    }

    @media screen and (-ms-high-contrast: active) {
    .mdc-checkbox__mixedmark {
        margin: 0 1px;
    }
    }
    .mdc-checkbox--disabled {
    cursor: default;
    pointer-events: none;
    }

    .mdc-checkbox__background {
    /* @noflip */
    left: 11px;
    /* @noflip */
    right: initial;
    display: inline-flex;
    position: absolute;
    top: 11px;
    bottom: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 45%;
    height: 45%;
    border: 2px solid currentColor;
    border-radius: 2px;
    background-color: transparent;
    pointer-events: none;
    will-change: background-color, border-color;
    transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-checkbox[dir=rtl] .mdc-checkbox__background, [dir=rtl] .mdc-checkbox .mdc-checkbox__background {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 11px;
    }

    .mdc-checkbox__checkmark {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-checkbox--upgraded .mdc-checkbox__checkmark {
    opacity: 1;
    }

    .mdc-checkbox__checkmark-path {
    transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    stroke: currentColor;
    stroke-width: 3.12px;
    stroke-dashoffset: 29.7833385;
    stroke-dasharray: 29.7833385;
    }

    .mdc-checkbox__mixedmark {
    width: 100%;
    height: 0;
    -webkit-transform: scaleX(0) rotate(0deg);
            transform: scaleX(0) rotate(0deg);
    border-width: 1px;
    border-style: solid;
    opacity: 0;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }

    .mdc-checkbox--upgraded .mdc-checkbox__background,
    .mdc-checkbox--upgraded .mdc-checkbox__checkmark,
    .mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,
    .mdc-checkbox--upgraded .mdc-checkbox__mixedmark {
    transition: none !important;
    }

    .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
    -webkit-animation-duration: 180ms;
            animation-duration: 180ms;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    }
    .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
    -webkit-animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;
            animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;
            animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
    -webkit-animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;
            animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
    -webkit-animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;
            animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;
            animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
    -webkit-animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;
            animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;
            animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;
    transition: none;
    }
    .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;
            animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;
    transition: none;
    }

    .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
    .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
    transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }
    .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,
    .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path {
    stroke-dashoffset: 0;
    }

    .mdc-checkbox__background::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    will-change: opacity, transform;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }

    .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {
    -webkit-transform: scale(2.75, 2.75);
            transform: scale(2.75, 2.75);
    opacity: 0.12;
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-checkbox__native-control {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
    }
    .mdc-checkbox__native-control:disabled {
    cursor: default;
    pointer-events: none;
    }

    .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    opacity: 1;
    }
    .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
    -webkit-transform: scaleX(1) rotate(-45deg);
            transform: scaleX(1) rotate(-45deg);
    }

    .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    opacity: 0;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {
    -webkit-transform: scaleX(1) rotate(0deg);
            transform: scaleX(1) rotate(0deg);
    opacity: 1;
    }

    .mdc-checkbox {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-checkbox::before, .mdc-checkbox::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-checkbox::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-checkbox.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-checkbox.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-checkbox.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-checkbox::before, .mdc-checkbox::after {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-checkbox::before, .mdc-checkbox::after {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-checkbox:hover::before {
    opacity: 0.04;
    }
    .mdc-checkbox:not(.mdc-ripple-upgraded):focus::before, .mdc-checkbox.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-checkbox:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-checkbox:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-checkbox.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    .mdc-checkbox::before, .mdc-checkbox::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-checkbox.mdc-ripple-upgraded::before, .mdc-checkbox.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-checkbox.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }

    .mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before {
    content: none;
    }

    .mdc-chip {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    border-radius: 16px;
    background-color: #e0e0e0;
    color: rgba(0, 0, 0, 0.87);
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    height: 32px;
    display: inline-flex;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding: 7px 12px;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    }
    .mdc-chip::before, .mdc-chip::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-chip::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-chip.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-chip.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-chip.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-chip.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-chip.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-chip::before, .mdc-chip::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-chip.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-chip::before, .mdc-chip::after {
    background-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-chip:hover::before {
    opacity: 0.04;
    }
    .mdc-chip:not(.mdc-ripple-upgraded):focus::before, .mdc-chip.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-chip:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-chip:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-chip.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    .mdc-chip:hover {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,
    .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
    /* @noflip */
    margin-left: -4px;
    /* @noflip */
    margin-right: 4px;
    margin-top: -4px;
    margin-bottom: -4px;
    }
    [dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark, .mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],
    [dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),
    .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl] {
    /* @noflip */
    margin-left: 4px;
    /* @noflip */
    margin-right: -4px;
    }
    .mdc-chip:hover {
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    }

    .mdc-chip__icon--leading {
    color: rgba(0, 0, 0, 0.54);
    }

    .mdc-chip__icon--trailing {
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-chip__icon--trailing:hover {
    color: rgba(0, 0, 0, 0.62);
    }
    .mdc-chip__icon--trailing:focus {
    color: rgba(0, 0, 0, 0.87);
    }

    .mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
    width: 20px;
    height: 20px;
    font-size: 20px;
    }

    .mdc-chip__icon.mdc-chip__icon--trailing {
    width: 18px;
    height: 18px;
    font-size: 18px;
    }

    .mdc-chip__icon--trailing {
    margin: 0 -4px 0 4px;
    }

    .mdc-chip--exit {
    transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;
    opacity: 0;
    }

    .mdc-chip__text {
    white-space: nowrap;
    }

    .mdc-chip__icon {
    border-radius: 50%;
    outline: none;
    vertical-align: middle;
    }

    .mdc-chip__checkmark {
    height: 20px;
    }

    .mdc-chip__checkmark-path {
    transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);
    stroke-width: 2px;
    stroke-dashoffset: 29.7833385;
    stroke-dasharray: 29.7833385;
    }

    .mdc-chip--selected .mdc-chip__checkmark-path {
    stroke-dashoffset: 0;
    }

    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before {
    opacity: 0.08;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover::before {
    opacity: 0.12;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.2;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.2;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.2;
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {
    color: rgba(98, 0, 238, 0.54);
    }
    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path {
    stroke: #6200ee;
    /* @alternate */
    stroke: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-chip-set--choice .mdc-chip--selected {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    }

    .mdc-chip__checkmark-svg {
    width: 0;
    height: 20px;
    transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-chip--selected .mdc-chip__checkmark-svg {
    width: 20px;
    }

    .mdc-chip-set--filter .mdc-chip__icon--leading {
    transition: opacity 75ms linear;
    transition-delay: -50ms;
    opacity: 1;
    }
    .mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark {
    transition: opacity 75ms linear;
    transition-delay: 80ms;
    opacity: 0;
    }
    .mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark .mdc-chip__checkmark-svg {
    transition: width 0ms;
    }
    .mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading {
    opacity: 0;
    }
    .mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading + .mdc-chip__checkmark {
    width: 0;
    opacity: 1;
    }
    .mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading {
    width: 0;
    opacity: 0;
    }
    .mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading + .mdc-chip__checkmark {
    width: 20px;
    }

    @-webkit-keyframes mdc-chip-entry {
    from {
        -webkit-transform: scale(0.8);
                transform: scale(0.8);
        opacity: 0.4;
    }
    to {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
    }
    }

    @keyframes mdc-chip-entry {
    from {
        -webkit-transform: scale(0.8);
                transform: scale(0.8);
        opacity: 0.4;
    }
    to {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
    }
    }
    .mdc-chip-set {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    }
    .mdc-chip-set .mdc-chip {
    margin: 4px;
    }

    .mdc-chip-set--input .mdc-chip {
    -webkit-animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);
            animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-dialog,
    .mdc-dialog__scrim {
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    }

    .mdc-dialog {
    display: none;
    z-index: 7;
    }
    .mdc-dialog .mdc-dialog__surface {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    }
    .mdc-dialog .mdc-dialog__scrim {
    background-color: rgba(0, 0, 0, 0.32);
    }
    .mdc-dialog .mdc-dialog__title {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-dialog .mdc-dialog__content {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title, .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions {
    border-color: rgba(0, 0, 0, 0.12);
    }
    .mdc-dialog .mdc-dialog__surface {
    min-width: 280px;
    }
    @media (max-width: 592px) {
    .mdc-dialog .mdc-dialog__surface {
        max-width: calc(100vw - 32px);
    }
    }
    @media (min-width: 592px) {
    .mdc-dialog .mdc-dialog__surface {
        max-width: 560px;
    }
    }
    .mdc-dialog .mdc-dialog__surface {
    max-height: calc(100vh - 32px);
    }
    .mdc-dialog .mdc-dialog__surface {
    border-radius: 4px;
    }

    .mdc-dialog__scrim {
    opacity: 0;
    z-index: -1;
    }

    .mdc-dialog__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    opacity: 0;
    }

    .mdc-dialog__surface {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    }
    .mdc-dialog[dir=rtl] .mdc-dialog__surface, [dir=rtl] .mdc-dialog .mdc-dialog__surface {
    text-align: right;
    }

    .mdc-dialog__title {
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0 24px 9px;
    border-bottom: 1px solid transparent;
    }
    .mdc-dialog__title::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
    }
    .mdc-dialog[dir=rtl] .mdc-dialog__title, [dir=rtl] .mdc-dialog .mdc-dialog__title {
    text-align: right;
    }

    .mdc-dialog--scrollable .mdc-dialog__title {
    padding-bottom: 15px;
    }

    .mdc-dialog__content {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
    text-decoration: inherit;
    text-transform: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 20px 24px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    }
    .mdc-dialog__content > :first-child {
    margin-top: 0;
    }
    .mdc-dialog__content > :last-child {
    margin-bottom: 0;
    }

    .mdc-dialog__title + .mdc-dialog__content {
    padding-top: 0;
    }

    .mdc-dialog--scrollable .mdc-dialog__content {
    padding-top: 8px;
    padding-bottom: 8px;
    }

    .mdc-dialog__content .mdc-list:first-child:last-child {
    padding: 6px 0 0;
    }

    .mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child {
    padding: 0;
    }

    .mdc-dialog__actions {
    display: flex;
    position: relative;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    min-height: 52px;
    margin: 0;
    padding: 8px;
    border-top: 1px solid transparent;
    }
    .mdc-dialog--stacked .mdc-dialog__actions {
    flex-direction: column;
    align-items: flex-end;
    }

    .mdc-dialog__button {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    max-width: 100%;
    text-align: right;
    }
    [dir=rtl] .mdc-dialog__button, .mdc-dialog__button[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    }
    .mdc-dialog__button:first-child {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-dialog__button:first-child, .mdc-dialog__button:first-child[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    }
    .mdc-dialog[dir=rtl] .mdc-dialog__button, [dir=rtl] .mdc-dialog .mdc-dialog__button {
    text-align: left;
    }

    .mdc-dialog--stacked .mdc-dialog__button:not(:first-child) {
    margin-top: 12px;
    }

    .mdc-dialog--open,
    .mdc-dialog--opening,
    .mdc-dialog--closing {
    display: flex;
    }

    .mdc-dialog--opening .mdc-dialog__scrim {
    transition: opacity 150ms linear;
    }
    .mdc-dialog--opening .mdc-dialog__container {
    transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-dialog--closing .mdc-dialog__scrim,
    .mdc-dialog--closing .mdc-dialog__container {
    transition: opacity 75ms linear;
    }
    .mdc-dialog--closing .mdc-dialog__container {
    -webkit-transform: scale(1);
            transform: scale(1);
    }

    .mdc-dialog--open .mdc-dialog__scrim {
    opacity: 1;
    }
    .mdc-dialog--open .mdc-dialog__container {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
    }

    .mdc-dialog-scroll-lock {
    overflow: hidden;
    }

    .mdc-drawer {
    border-color: rgba(0, 0, 0, 0.12);
    background-color: #fff;
    /* @noflip */
    border-radius: 0 0 0 0;
    z-index: 6;
    width: 256px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-sizing: border-box;
    height: 100%;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    /* @noflip */
    border-right-width: 1px;
    /* @noflip */
    border-right-style: solid;
    overflow: hidden;
    }
    .mdc-drawer .mdc-drawer__title {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-drawer .mdc-list-group__subheader {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-drawer .mdc-drawer__subtitle {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-drawer .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-drawer .mdc-list-item {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic {
    color: #6200ee;
    }
    .mdc-drawer .mdc-list-item--activated {
    color: rgba(98, 0, 238, 0.87);
    }
    [dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {
    /* @noflip */
    border-radius: 0 0 0 0;
    }
    .mdc-drawer .mdc-list-item {
    border-radius: 4px;
    }
    .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {
    /* @noflip */
    margin-left: 256px;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content, .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 256px;
    }
    [dir=rtl] .mdc-drawer, .mdc-drawer[dir=rtl] {
    /* @noflip */
    border-right-width: 0;
    /* @noflip */
    border-left-width: 1px;
    /* @noflip */
    border-right-style: none;
    /* @noflip */
    border-left-style: solid;
    }
    .mdc-drawer .mdc-list-item {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.0071428571em;
    text-decoration: inherit;
    text-transform: inherit;
    height: calc(48px - 2 * 4px);
    margin: 8px 8px;
    padding: 0 8px;
    }
    .mdc-drawer .mdc-list-item:nth-child(1) {
    margin-top: 2px;
    }
    .mdc-drawer .mdc-list-item:nth-last-child(1) {
    margin-bottom: 0;
    }
    .mdc-drawer .mdc-list-group__subheader {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin: 0;
    padding: 0 16px;
    }
    .mdc-drawer .mdc-list-group__subheader::before {
    display: inline-block;
    width: 0;
    height: 24px;
    content: "";
    vertical-align: 0;
    }
    .mdc-drawer .mdc-list-divider {
    margin: 3px 0 4px 0;
    }
    .mdc-drawer .mdc-list-item__text,
    .mdc-drawer .mdc-list-item__graphic {
    pointer-events: none;
    }

    .mdc-drawer--animate {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    }
    [dir=rtl] .mdc-drawer--animate, .mdc-drawer--animate[dir=rtl] {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    }

    .mdc-drawer--opening {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    transition-duration: 250ms;
    }
    [dir=rtl] .mdc-drawer--opening, .mdc-drawer--opening[dir=rtl] {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    }

    .mdc-drawer--closing {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    transition-duration: 200ms;
    }
    [dir=rtl] .mdc-drawer--closing, .mdc-drawer--closing[dir=rtl] {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    }

    .mdc-drawer__header {
    flex-shrink: 0;
    box-sizing: border-box;
    min-height: 64px;
    padding: 0 16px 4px;
    }

    .mdc-drawer__title {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin-bottom: -20px;
    }
    .mdc-drawer__title::before {
    display: inline-block;
    width: 0;
    height: 36px;
    content: "";
    vertical-align: 0;
    }
    .mdc-drawer__title::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
    }

    .mdc-drawer__subtitle {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin-bottom: 0;
    }
    .mdc-drawer__subtitle::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
    }

    .mdc-drawer__content {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    }

    .mdc-drawer--dismissible {
    /* @noflip */
    left: 0;
    /* @noflip */
    right: initial;
    display: none;
    position: absolute;
    }
    [dir=rtl] .mdc-drawer--dismissible, .mdc-drawer--dismissible[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 0;
    }
    .mdc-drawer--dismissible.mdc-drawer--open {
    display: flex;
    }

    .mdc-drawer-app-content {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    position: relative;
    }
    [dir=rtl] .mdc-drawer-app-content, .mdc-drawer-app-content[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-drawer--modal {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    /* @noflip */
    left: 0;
    /* @noflip */
    right: initial;
    display: none;
    position: fixed;
    }
    .mdc-drawer--modal + .mdc-drawer-scrim {
    background-color: rgba(0, 0, 0, 0.32);
    }
    [dir=rtl] .mdc-drawer--modal, .mdc-drawer--modal[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 0;
    }
    .mdc-drawer--modal.mdc-drawer--open {
    display: flex;
    }

    .mdc-drawer-scrim {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 5;
    }
    .mdc-drawer--open + .mdc-drawer-scrim {
    display: block;
    }
    .mdc-drawer--animate + .mdc-drawer-scrim {
    opacity: 0;
    }
    .mdc-drawer--opening + .mdc-drawer-scrim {
    transition-duration: 250ms;
    opacity: 1;
    }
    .mdc-drawer--closing + .mdc-drawer-scrim {
    transition-duration: 200ms;
    opacity: 0;
    }

    .mdc-elevation--z0 {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z1 {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z3 {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z6 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z7 {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z8 {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z9 {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z10 {
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z11 {
    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z12 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z13 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z14 {
    box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z15 {
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z16 {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z17 {
    box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z18 {
    box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z19 {
    box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z20 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z21 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z22 {
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z23 {
    box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation--z24 {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    }

    .mdc-elevation-transition {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow;
    }

    .mdc-fab {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    padding: 0;
    border: none;
    fill: currentColor;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    overflow: hidden;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    background-color: #018786;
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-secondary, #fff);
    }
    .mdc-fab:not(.mdc-fab--extended) {
    border-radius: 50%;
    }
    .mdc-fab::-moz-focus-inner {
    padding: 0;
    border: 0;
    }
    .mdc-fab:hover, .mdc-fab:focus {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    .mdc-fab:active {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
    }
    .mdc-fab:active, .mdc-fab:focus {
    outline: none;
    }
    .mdc-fab:hover {
    cursor: pointer;
    }
    .mdc-fab > svg {
    width: 100%;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-fab {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-fab .mdc-fab__icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
    }

    .mdc-fab--mini {
    width: 40px;
    height: 40px;
    }

    .mdc-fab--extended {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 24px;
    padding: 0 20px;
    width: auto;
    max-width: 100%;
    height: 48px;
    }
    .mdc-fab--extended .mdc-fab__icon {
    /* @noflip */
    margin-left: -8px;
    /* @noflip */
    margin-right: 12px;
    }
    [dir=rtl] .mdc-fab--extended .mdc-fab__icon, .mdc-fab--extended .mdc-fab__icon[dir=rtl] {
    /* @noflip */
    margin-left: 12px;
    /* @noflip */
    margin-right: -8px;
    }
    .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon {
    /* @noflip */
    margin-left: 12px;
    /* @noflip */
    margin-right: -8px;
    }
    [dir=rtl] .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon, .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon[dir=rtl] {
    /* @noflip */
    margin-left: -8px;
    /* @noflip */
    margin-right: 12px;
    }

    .mdc-fab__label {
    justify-content: flex-start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }

    .mdc-fab__icon {
    transition: -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    fill: currentColor;
    will-change: transform;
    }

    .mdc-fab .mdc-fab__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    }

    .mdc-fab--exited {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0;
    transition: opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
    }
    .mdc-fab--exited .mdc-fab__icon {
    -webkit-transform: scale(0);
            transform: scale(0);
    transition: -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
    }

    .mdc-fab {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-fab::before, .mdc-fab::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-fab::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-fab.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-fab.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-fab.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-fab.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-fab::before, .mdc-fab::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-fab.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-fab::before, .mdc-fab::after {
    background-color: #fff;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-fab::before, .mdc-fab::after {
        /* @alternate */
        background-color: var(--mdc-theme-on-secondary, #fff);
    }
    }
    .mdc-fab:hover::before {
    opacity: 0.08;
    }
    .mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-fab:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-fab:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-fab.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }

    .mdc-floating-label {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    position: absolute;
    /* @noflip */
    left: 0;
    /* @noflip */
    -webkit-transform-origin: left top;
            transform-origin: left top;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    /* @alternate */
    line-height: 1.15rem;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    }
    [dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {
    /* @noflip */
    right: 0;
    /* @noflip */
    left: auto;
    /* @noflip */
    -webkit-transform-origin: right top;
            transform-origin: right top;
    /* @noflip */
    text-align: right;
    }

    .mdc-floating-label--float-above {
    cursor: auto;
    }

    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-50%) scale(0.75);
            transform: translateY(-50%) scale(0.75);
    }

    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-standard 250ms 1;
            animation: mdc-floating-label-shake-float-above-standard 250ms 1;
    }

    @-webkit-keyframes mdc-floating-label-shake-float-above-standard {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
    }
    }

    @keyframes mdc-floating-label-shake-float-above-standard {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
    }
    }
    .mdc-form-field {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    }
    .mdc-form-field > label {
    order: 0;
    /* @noflip */
    margin-right: auto;
    /* @noflip */
    padding-left: 4px;
    }
    [dir=rtl] .mdc-form-field > label, .mdc-form-field[dir=rtl] > label {
    /* @noflip */
    margin-left: auto;
    /* @noflip */
    padding-right: 4px;
    }

    .mdc-form-field--align-end > label {
    order: -1;
    /* @noflip */
    margin-left: auto;
    /* @noflip */
    padding-right: 4px;
    }
    [dir=rtl] .mdc-form-field--align-end > label, .mdc-form-field--align-end[dir=rtl] > label {
    /* @noflip */
    margin-right: auto;
    /* @noflip */
    padding-left: 4px;
    }

    .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 1);
    }

    .mdc-grid-tile {
    margin: 2px 0;
    padding: 0 2px;
    }

    .mdc-grid-tile__secondary {
    left: 2px;
    width: calc(100% - 4px);
    }

    .mdc-grid-list__tiles {
    margin: 2px auto;
    }

    .mdc-grid-list__tiles {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    }

    .mdc-grid-list--tile-gutter-1 .mdc-grid-tile {
    margin: 0.5px 0;
    padding: 0 0.5px;
    }
    .mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary {
    left: 0.5px;
    width: calc(100% - 1px);
    }
    .mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles {
    margin: 0.5px auto;
    }

    .mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 1.7777777778);
    }

    .mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 1.5);
    }

    .mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 0.6666666667);
    }

    .mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 1.3333333333);
    }

    .mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary {
    padding-bottom: calc(100% / 0.75);
    }

    .mdc-grid-tile {
    display: block;
    position: relative;
    /* @alternate */
    width: 200px;
    width: var(--mdc-grid-list-tile-width, 200px);
    }

    .mdc-grid-tile__primary {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-background, #fff);
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    position: relative;
    height: 0;
    }

    .mdc-grid-tile__primary-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }

    .mdc-grid-tile__secondary {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff);
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    height: 48px;
    padding: 16px;
    }

    .mdc-grid-tile__title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 500;
    }

    .mdc-grid-tile__support-text {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin: 0;
    margin-top: 4px;
    padding: 0;
    }

    .mdc-grid-tile__icon {
    position: absolute;
    top: calc(50% - 24px / 2);
    font-size: 0;
    }

    .mdc-grid-list--twoline-caption .mdc-grid-tile__secondary {
    height: 68px;
    }

    .mdc-grid-list--header-caption .mdc-grid-tile__secondary {
    top: 0;
    bottom: auto;
    }

    .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {
    /* @noflip */
    padding-left: 56px;
    /* @noflip */
    padding-right: 8px;
    }
    .mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary, [dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {
    /* @noflip */
    padding-left: 8px;
    /* @noflip */
    padding-right: 56px;
    }

    .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    font-size: 24px;
    }
    .mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon, [dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }

    .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 56px;
    }
    .mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary, [dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {
    /* @noflip */
    padding-left: 56px;
    /* @noflip */
    padding-right: 16px;
    }

    .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    font-size: 24px;
    }
    .mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon, [dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }

    .mdc-icon-button {
    width: 48px;
    height: 48px;
    padding: 12px;
    font-size: 24px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    .mdc-icon-button svg,
    .mdc-icon-button img {
    width: 24px;
    height: 24px;
    }
    .mdc-icon-button:disabled {
    color: rgba(0, 0, 0, 0.38);
    /* @alternate */
    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
    cursor: default;
    pointer-events: none;
    }

    .mdc-icon-button__icon {
    display: inline-block;
    }
    .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: none;
    }

    .mdc-icon-button--on .mdc-icon-button__icon {
    display: none;
    }
    .mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: inline-block;
    }

    .mdc-icon-button {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-icon-button::before, .mdc-icon-button::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-icon-button::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-icon-button.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-icon-button.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-icon-button.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-icon-button::before, .mdc-icon-button::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-icon-button.mdc-ripple-upgraded::before, .mdc-icon-button.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-icon-button.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-icon-button::before, .mdc-icon-button::after {
    background-color: #000;
    }
    .mdc-icon-button:hover::before {
    opacity: 0.04;
    }
    .mdc-icon-button:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-button.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-icon-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-icon-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-icon-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    .mdc-image-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    }

    .mdc-image-list__item,
    .mdc-image-list__image-aspect-container {
    position: relative;
    box-sizing: border-box;
    }

    .mdc-image-list__item {
    list-style-type: none;
    }

    .mdc-image-list__image {
    width: 100%;
    }

    .mdc-image-list__image-aspect-container .mdc-image-list__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }

    .mdc-image-list__image-aspect-container {
    padding-bottom: calc(100% / 1);
    }

    .mdc-image-list__image {
    border-radius: 0;
    }

    .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    border-radius: 0 0 0 0;
    }

    .mdc-image-list__supporting {
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 0;
    line-height: 24px;
    }

    .mdc-image-list__label {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }

    .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    }

    .mdc-image-list--masonry {
    display: block;
    }
    .mdc-image-list--masonry .mdc-image-list__item {
    -webkit-column-break-inside: avoid;
            break-inside: avoid-column;
    }
    .mdc-image-list--masonry .mdc-image-list__image {
    display: block;
    height: auto;
    }

    :root {
    --mdc-layout-grid-margin-desktop: 24px;
    --mdc-layout-grid-gutter-desktop: 24px;
    --mdc-layout-grid-column-width-desktop: 72px;
    --mdc-layout-grid-margin-tablet: 16px;
    --mdc-layout-grid-gutter-tablet: 16px;
    --mdc-layout-grid-column-width-tablet: 72px;
    --mdc-layout-grid-margin-phone: 16px;
    --mdc-layout-grid-gutter-phone: 16px;
    --mdc-layout-grid-column-width-phone: 72px;
    }

    @media (min-width: 840px) {
    .mdc-layout-grid {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 24px;
        padding: var(--mdc-layout-grid-margin-desktop, 24px);
    }
    }
    @media (min-width: 480px) and (max-width: 839px) {
    .mdc-layout-grid {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 16px;
        padding: var(--mdc-layout-grid-margin-tablet, 16px);
    }
    }
    @media (max-width: 479px) {
    .mdc-layout-grid {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 16px;
        padding: var(--mdc-layout-grid-margin-phone, 16px);
    }
    }

    @media (min-width: 840px) {
    .mdc-layout-grid__inner {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        margin: -12px;
        margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);
    }
    @supports (display: grid) {
        .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 24px;
        grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);
        grid-template-columns: repeat(12, minmax(0, 1fr));
        }
    }
    }
    @media (min-width: 480px) and (max-width: 839px) {
    .mdc-layout-grid__inner {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        margin: -8px;
        margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);
    }
    @supports (display: grid) {
        .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 16px;
        grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);
        grid-template-columns: repeat(8, minmax(0, 1fr));
        }
    }
    }
    @media (max-width: 479px) {
    .mdc-layout-grid__inner {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        margin: -8px;
        margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);
    }
    @supports (display: grid) {
        .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 16px;
        grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);
        grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
    }

    @media (min-width: 840px) {
    .mdc-layout-grid__cell {
        width: calc(33.3333333333% - 24px);
        width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
        box-sizing: border-box;
        margin: 12px;
        margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
        }
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        margin: 0;
        }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-desktop {
        width: calc(8.3333333333% - 24px);
        width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-desktop {
        width: auto;
        grid-column-end: span 1;
        }
    }

    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-desktop {
        width: calc(16.6666666667% - 24px);
        width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-desktop {
        width: auto;
        grid-column-end: span 2;
        }
    }

    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-desktop {
        width: calc(25% - 24px);
        width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-desktop {
        width: auto;
        grid-column-end: span 3;
        }
    }

    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-desktop {
        width: calc(33.3333333333% - 24px);
        width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-desktop {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-desktop {
        width: calc(41.6666666667% - 24px);
        width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-desktop {
        width: auto;
        grid-column-end: span 5;
        }
    }

    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-desktop {
        width: calc(50% - 24px);
        width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-desktop {
        width: auto;
        grid-column-end: span 6;
        }
    }

    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-desktop {
        width: calc(58.3333333333% - 24px);
        width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-desktop {
        width: auto;
        grid-column-end: span 7;
        }
    }

    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-desktop {
        width: calc(66.6666666667% - 24px);
        width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-desktop {
        width: auto;
        grid-column-end: span 8;
        }
    }

    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-desktop {
        width: calc(75% - 24px);
        width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-desktop {
        width: auto;
        grid-column-end: span 9;
        }
    }

    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-desktop {
        width: calc(83.3333333333% - 24px);
        width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-desktop {
        width: auto;
        grid-column-end: span 10;
        }
    }

    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-desktop {
        width: calc(91.6666666667% - 24px);
        width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-desktop {
        width: auto;
        grid-column-end: span 11;
        }
    }

    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-desktop {
        width: calc(100% - 24px);
        width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-desktop {
        width: auto;
        grid-column-end: span 12;
        }
    }
    }
    @media (min-width: 480px) and (max-width: 839px) {
    .mdc-layout-grid__cell {
        width: calc(50% - 16px);
        width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));
        box-sizing: border-box;
        margin: 8px;
        margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
        }
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        margin: 0;
        }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-tablet {
        width: calc(12.5% - 16px);
        width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-tablet {
        width: auto;
        grid-column-end: span 1;
        }
    }

    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-tablet {
        width: calc(25% - 16px);
        width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-tablet {
        width: auto;
        grid-column-end: span 2;
        }
    }

    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-tablet {
        width: calc(37.5% - 16px);
        width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-tablet {
        width: auto;
        grid-column-end: span 3;
        }
    }

    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-tablet {
        width: calc(50% - 16px);
        width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-tablet {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-tablet {
        width: calc(62.5% - 16px);
        width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-tablet {
        width: auto;
        grid-column-end: span 5;
        }
    }

    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-tablet {
        width: calc(75% - 16px);
        width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-tablet {
        width: auto;
        grid-column-end: span 6;
        }
    }

    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-tablet {
        width: calc(87.5% - 16px);
        width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-tablet {
        width: auto;
        grid-column-end: span 7;
        }
    }

    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-tablet {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-tablet {
        width: auto;
        grid-column-end: span 8;
        }
    }

    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-tablet {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-tablet {
        width: auto;
        grid-column-end: span 8;
        }
    }

    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-tablet {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-tablet {
        width: auto;
        grid-column-end: span 8;
        }
    }

    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-tablet {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-tablet {
        width: auto;
        grid-column-end: span 8;
        }
    }

    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-tablet {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-tablet {
        width: auto;
        grid-column-end: span 8;
        }
    }
    }
    @media (max-width: 479px) {
    .mdc-layout-grid__cell {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
        box-sizing: border-box;
        margin: 8px;
        margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
        }
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell {
        margin: 0;
        }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-phone {
        width: calc(25% - 16px);
        width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-phone {
        width: auto;
        grid-column-end: span 1;
        }
    }

    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-phone {
        width: calc(50% - 16px);
        width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-phone {
        width: auto;
        grid-column-end: span 2;
        }
    }

    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-phone {
        width: calc(75% - 16px);
        width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-phone {
        width: auto;
        grid-column-end: span 3;
        }
    }

    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }

    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-phone {
        width: calc(100% - 16px);
        width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
        .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-phone {
        width: auto;
        grid-column-end: span 4;
        }
    }
    }
    .mdc-layout-grid__cell--order-1 {
    order: 1;
    }
    .mdc-layout-grid__cell--order-2 {
    order: 2;
    }
    .mdc-layout-grid__cell--order-3 {
    order: 3;
    }
    .mdc-layout-grid__cell--order-4 {
    order: 4;
    }
    .mdc-layout-grid__cell--order-5 {
    order: 5;
    }
    .mdc-layout-grid__cell--order-6 {
    order: 6;
    }
    .mdc-layout-grid__cell--order-7 {
    order: 7;
    }
    .mdc-layout-grid__cell--order-8 {
    order: 8;
    }
    .mdc-layout-grid__cell--order-9 {
    order: 9;
    }
    .mdc-layout-grid__cell--order-10 {
    order: 10;
    }
    .mdc-layout-grid__cell--order-11 {
    order: 11;
    }
    .mdc-layout-grid__cell--order-12 {
    order: 12;
    }
    .mdc-layout-grid__cell--align-top {
    align-self: flex-start;
    }
    @supports (display: grid) {
    .mdc-layout-grid__cell--align-top {
        align-self: start;
    }
    }
    .mdc-layout-grid__cell--align-middle {
    align-self: center;
    }
    .mdc-layout-grid__cell--align-bottom {
    align-self: flex-end;
    }
    @supports (display: grid) {
    .mdc-layout-grid__cell--align-bottom {
        align-self: end;
    }
    }

    @media (min-width: 840px) {
    .mdc-layout-grid--fixed-column-width {
        width: 1176px;
        width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2 );
    }
    }
    @media (min-width: 480px) and (max-width: 839px) {
    .mdc-layout-grid--fixed-column-width {
        width: 720px;
        width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2 );
    }
    }
    @media (max-width: 479px) {
    .mdc-layout-grid--fixed-column-width {
        width: 368px;
        width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2 );
    }
    }

    .mdc-layout-grid--align-left {
    margin-right: auto;
    margin-left: 0;
    }

    .mdc-layout-grid--align-right {
    margin-right: 0;
    margin-left: auto;
    }

    .mdc-line-ripple {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: 2;
    }

    .mdc-line-ripple--active {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    opacity: 1;
    }

    .mdc-line-ripple--deactivating {
    opacity: 0;
    }

    @-webkit-keyframes primary-indeterminate-translate {
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    20% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    59.15% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(83.67142%);
                transform: translateX(83.67142%);
    }
    100% {
        -webkit-transform: translateX(200.611057%);
                transform: translateX(200.611057%);
    }
    }

    @keyframes primary-indeterminate-translate {
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    20% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    59.15% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(83.67142%);
                transform: translateX(83.67142%);
    }
    100% {
        -webkit-transform: translateX(200.611057%);
                transform: translateX(200.611057%);
    }
    }
    @-webkit-keyframes primary-indeterminate-scale {
    0% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    36.65% {
        -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
                animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    69.15% {
        -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
                animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
        -webkit-transform: scaleX(0.661479);
                transform: scaleX(0.661479);
    }
    100% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    }
    @keyframes primary-indeterminate-scale {
    0% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    36.65% {
        -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
                animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    69.15% {
        -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
                animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
        -webkit-transform: scaleX(0.661479);
                transform: scaleX(0.661479);
    }
    100% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    }
    @-webkit-keyframes secondary-indeterminate-translate {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    25% {
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
                animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
        -webkit-transform: translateX(37.651913%);
                transform: translateX(37.651913%);
    }
    48.35% {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
        -webkit-transform: translateX(84.386165%);
                transform: translateX(84.386165%);
    }
    100% {
        -webkit-transform: translateX(160.277782%);
                transform: translateX(160.277782%);
    }
    }
    @keyframes secondary-indeterminate-translate {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    25% {
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
                animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
        -webkit-transform: translateX(37.651913%);
                transform: translateX(37.651913%);
    }
    48.35% {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
        -webkit-transform: translateX(84.386165%);
                transform: translateX(84.386165%);
    }
    100% {
        -webkit-transform: translateX(160.277782%);
                transform: translateX(160.277782%);
    }
    }
    @-webkit-keyframes secondary-indeterminate-scale {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
                animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    19.15% {
        -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
                animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
        -webkit-transform: scaleX(0.457104);
                transform: scaleX(0.457104);
    }
    44.15% {
        -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
                animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
        -webkit-transform: scaleX(0.72796);
                transform: scaleX(0.72796);
    }
    100% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    }
    @keyframes secondary-indeterminate-scale {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
                animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    19.15% {
        -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
                animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
        -webkit-transform: scaleX(0.457104);
                transform: scaleX(0.457104);
    }
    44.15% {
        -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
                animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
        -webkit-transform: scaleX(0.72796);
                transform: scaleX(0.72796);
    }
    100% {
        -webkit-transform: scaleX(0.08);
                transform: scaleX(0.08);
    }
    }
    @-webkit-keyframes buffering {
    to {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    }
    @keyframes buffering {
    to {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    }
    @-webkit-keyframes primary-indeterminate-translate-reverse {
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    20% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    59.15% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(-83.67142%);
                transform: translateX(-83.67142%);
    }
    100% {
        -webkit-transform: translateX(-200.611057%);
                transform: translateX(-200.611057%);
    }
    }
    @keyframes primary-indeterminate-translate-reverse {
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    20% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    59.15% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(-83.67142%);
                transform: translateX(-83.67142%);
    }
    100% {
        -webkit-transform: translateX(-200.611057%);
                transform: translateX(-200.611057%);
    }
    }
    @-webkit-keyframes secondary-indeterminate-translate-reverse {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    25% {
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
                animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
        -webkit-transform: translateX(-37.651913%);
                transform: translateX(-37.651913%);
    }
    48.35% {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
        -webkit-transform: translateX(-84.386165%);
                transform: translateX(-84.386165%);
    }
    100% {
        -webkit-transform: translateX(-160.277782%);
                transform: translateX(-160.277782%);
    }
    }
    @keyframes secondary-indeterminate-translate-reverse {
    0% {
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    25% {
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
                animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
        -webkit-transform: translateX(-37.651913%);
                transform: translateX(-37.651913%);
    }
    48.35% {
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
        -webkit-transform: translateX(-84.386165%);
                transform: translateX(-84.386165%);
    }
    100% {
        -webkit-transform: translateX(-160.277782%);
                transform: translateX(-160.277782%);
    }
    }
    @-webkit-keyframes buffering-reverse {
    to {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    }
    @keyframes buffering-reverse {
    to {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    }
    .mdc-linear-progress {
    position: relative;
    width: 100%;
    height: 4px;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    overflow: hidden;
    }
    .mdc-linear-progress__bar {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-animation: none;
            animation: none;
    -webkit-transform-origin: top left;
            transform-origin: top left;
    transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-linear-progress__bar-inner {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-animation: none;
            animation: none;
    }
    .mdc-linear-progress__buffering-dots {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-animation: buffering 250ms infinite linear;
            animation: buffering 250ms infinite linear;
    background-repeat: repeat-x;
    background-size: 10px 4px;
    }
    .mdc-linear-progress__buffer {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: top left;
            transform-origin: top left;
    transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-linear-progress__primary-bar {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    }
    .mdc-linear-progress__secondary-bar {
    visibility: hidden;
    }
    .mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
    transition: none;
    }
    .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
    left: -145.166611%;
    -webkit-animation: primary-indeterminate-translate 2s infinite linear;
            animation: primary-indeterminate-translate 2s infinite linear;
    }
    .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
    -webkit-animation: primary-indeterminate-scale 2s infinite linear;
            animation: primary-indeterminate-scale 2s infinite linear;
    }
    .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
    left: -54.888891%;
    -webkit-animation: secondary-indeterminate-translate 2s infinite linear;
            animation: secondary-indeterminate-translate 2s infinite linear;
    visibility: visible;
    }
    .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
    -webkit-animation: secondary-indeterminate-scale 2s infinite linear;
            animation: secondary-indeterminate-scale 2s infinite linear;
    }
    .mdc-linear-progress--reversed .mdc-linear-progress__bar,
    .mdc-linear-progress--reversed .mdc-linear-progress__buffer {
    right: 0;
    -webkit-transform-origin: center right;
            transform-origin: center right;
    }
    .mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {
    -webkit-animation-name: primary-indeterminate-translate-reverse;
            animation-name: primary-indeterminate-translate-reverse;
    }
    .mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {
    -webkit-animation-name: secondary-indeterminate-translate-reverse;
            animation-name: secondary-indeterminate-translate-reverse;
    }
    .mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots {
    -webkit-animation: buffering-reverse 250ms infinite linear;
            animation: buffering-reverse 250ms infinite linear;
    }
    .mdc-linear-progress--closed {
    opacity: 0;
    }

    .mdc-linear-progress__bar-inner {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    }

    .mdc-linear-progress__buffering-dots {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");
    }

    .mdc-linear-progress__buffer {
    background-color: #e6e6e6;
    }

    .mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {
    right: -145.166611%;
    left: auto;
    }
    .mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {
    right: -54.888891%;
    left: auto;
    }

    .mdc-list {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    /* @alternate */
    line-height: 1.5rem;
    margin: 0;
    padding: 8px 0;
    list-style-type: none;
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    }

    .mdc-list-item__secondary-text {
    color: rgba(0, 0, 0, 0.54);
    /* @alternate */
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
    }

    .mdc-list-item__graphic {
    background-color: transparent;
    }

    .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.38);
    /* @alternate */
    color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
    }

    .mdc-list-item__meta {
    color: rgba(0, 0, 0, 0.38);
    /* @alternate */
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
    }

    .mdc-list-group__subheader {
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    }

    .mdc-list--dense {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 0.812rem;
    }

    .mdc-list-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    height: 48px;
    padding: 0 16px;
    overflow: hidden;
    }
    .mdc-list-item:focus {
    outline: none;
    }

    .mdc-list-item--selected,
    .mdc-list-item--activated {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-list-item--selected .mdc-list-item__graphic,
    .mdc-list-item--activated .mdc-list-item__graphic {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }

    .mdc-list-item--disabled {
    color: rgba(0, 0, 0, 0.38);
    /* @alternate */
    color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38));
    }

    .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 32px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    fill: currentColor;
    }
    .mdc-list-item[dir=rtl] .mdc-list-item__graphic, [dir=rtl] .mdc-list-item .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 32px;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-list .mdc-list-item__graphic {
    display: inline-flex;
    }

    .mdc-list-item__meta {
    /* @noflip */
    margin-left: auto;
    /* @noflip */
    margin-right: 0;
    }
    .mdc-list-item[dir=rtl] .mdc-list-item__meta, [dir=rtl] .mdc-list-item .mdc-list-item__meta {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: auto;
    }

    .mdc-list-item__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }

    .mdc-list-item__text[for] {
    pointer-events: none;
    }

    .mdc-list-item__primary-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin-bottom: -20px;
    display: block;
    }
    .mdc-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
    }
    .mdc-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
    }
    .mdc-list--dense .mdc-list-item__primary-text {
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin-bottom: -20px;
    }
    .mdc-list--dense .mdc-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 24px;
    content: "";
    vertical-align: 0;
    }
    .mdc-list--dense .mdc-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
    }

    .mdc-list-item__secondary-text {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    display: block;
    }
    .mdc-list-item__secondary-text::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
    }
    .mdc-list--dense .mdc-list-item__secondary-text {
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    font-size: inherit;
    }
    .mdc-list--dense .mdc-list-item__secondary-text::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
    }

    .mdc-list--dense .mdc-list-item {
    height: 40px;
    }

    .mdc-list--dense .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 36px;
    width: 20px;
    height: 20px;
    }
    .mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__graphic, [dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 36px;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-list--avatar-list .mdc-list-item {
    height: 56px;
    }

    .mdc-list--avatar-list .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    }
    .mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic, [dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 16px;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-list--two-line .mdc-list-item__text {
    align-self: flex-start;
    }

    .mdc-list--two-line .mdc-list-item {
    height: 72px;
    }

    .mdc-list--two-line.mdc-list--dense .mdc-list-item,
    .mdc-list--avatar-list.mdc-list--dense .mdc-list-item {
    height: 60px;
    }

    .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 20px;
    width: 36px;
    height: 36px;
    }
    .mdc-list-item[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic, [dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic {
    /* @noflip */
    margin-left: 20px;
    /* @noflip */
    margin-right: 0;
    }

    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item {
    cursor: pointer;
    }

    a.mdc-list-item {
    color: inherit;
    text-decoration: none;
    }

    .mdc-list-divider {
    height: 0;
    margin: 0;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    }

    .mdc-list-divider {
    border-bottom-color: rgba(0, 0, 0, 0.12);
    }

    .mdc-list-divider--padded {
    margin: 0 16px;
    }

    .mdc-list-divider--inset {
    /* @noflip */
    margin-left: 72px;
    /* @noflip */
    margin-right: 0;
    width: calc(100% - 72px);
    }
    .mdc-list-group[dir=rtl] .mdc-list-divider--inset, [dir=rtl] .mdc-list-group .mdc-list-divider--inset {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 72px;
    }

    .mdc-list-divider--inset.mdc-list-divider--padded {
    width: calc(100% - 72px - 16px);
    }

    .mdc-list-group .mdc-list {
    padding: 0;
    }

    .mdc-list-group__subheader {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    margin: 0.75rem 16px;
    }

    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item::after {
    background-color: #000;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item:hover::before {
    opacity: 0.04;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated::before {
    opacity: 0.12;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated:hover::before {
    opacity: 0.16;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected::before {
    opacity: 0.08;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected:hover::before {
    opacity: 0.12;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before, :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.2;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.2;
    }
    :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.2;
    }

    .mdc-menu {
    min-width: 112px;
    }
    .mdc-menu .mdc-list-item__meta {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-menu .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-menu .mdc-list {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-menu .mdc-list-divider {
    margin: 8px 0;
    }
    .mdc-menu .mdc-list-item {
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    .mdc-menu .mdc-list-item--disabled {
    cursor: auto;
    }
    .mdc-menu a.mdc-list-item .mdc-list-item__text,
    .mdc-menu a.mdc-list-item .mdc-list-item__graphic {
    pointer-events: none;
    }

    .mdc-menu__selection-group {
    padding: 0;
    fill: currentColor;
    }
    .mdc-menu__selection-group .mdc-list-item {
    /* @noflip */
    padding-left: 56px;
    /* @noflip */
    padding-right: 16px;
    }
    [dir=rtl] .mdc-menu__selection-group .mdc-list-item, .mdc-menu__selection-group .mdc-list-item[dir=rtl] {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 56px;
    }
    .mdc-menu__selection-group .mdc-menu__selection-group-icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    display: none;
    position: absolute;
    }
    [dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon, .mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }

    .mdc-menu-item--selected .mdc-menu__selection-group-icon {
    display: inline;
    }

    .mdc-menu-surface {
    display: none;
    position: absolute;
    box-sizing: border-box;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    margin: 0;
    padding: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: top left;
            transform-origin: top left;
    opacity: 0;
    overflow: auto;
    will-change: transform, opacity;
    z-index: 8;
    transition: opacity 0.03s linear, -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    border-radius: 4px;
    /* @noflip */
    transform-origin-left: top left;
    /* @noflip */
    transform-origin-right: top right;
    }
    .mdc-menu-surface:focus {
    outline: none;
    }
    .mdc-menu-surface--open {
    display: inline-block;
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
    }
    .mdc-menu-surface--animating-open {
    display: inline-block;
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    opacity: 0;
    }
    .mdc-menu-surface--animating-closed {
    display: inline-block;
    opacity: 0;
    transition: opacity 0.075s linear;
    }
    [dir=rtl] .mdc-menu-surface, .mdc-menu-surface[dir=rtl] {
    /* @noflip */
    transform-origin-left: top right;
    /* @noflip */
    transform-origin-right: top left;
    }

    .mdc-menu-surface--anchor {
    position: relative;
    overflow: visible;
    }

    .mdc-menu-surface--fixed {
    position: fixed;
    }

    .mdc-notched-outline {
    display: flex;
    position: absolute;
    right: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    /* @noflip */
    text-align: left;
    pointer-events: none;
    }
    [dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {
    /* @noflip */
    text-align: right;
    }
    .mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
    box-sizing: border-box;
    height: 100%;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border-top: 1px solid;
    border-bottom: 1px solid;
    pointer-events: none;
    }
    .mdc-notched-outline__leading {
    /* @noflip */
    border-left: 1px solid;
    /* @noflip */
    border-right: none;
    width: 12px;
    }
    [dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-left: none;
    /* @noflip */
    border-right: 1px solid;
    }
    .mdc-notched-outline__trailing {
    /* @noflip */
    border-left: none;
    /* @noflip */
    border-right: 1px solid;
    flex-grow: 1;
    }
    [dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-left: 1px solid;
    /* @noflip */
    border-right: none;
    }
    .mdc-notched-outline__notch {
    flex: 0 0 auto;
    width: auto;
    max-width: calc(100% - 12px * 2);
    }
    .mdc-notched-outline .mdc-floating-label {
    display: inline-block;
    position: relative;
    top: 17px;
    bottom: auto;
    max-width: 100%;
    }
    .mdc-notched-outline .mdc-floating-label--float-above {
    text-overflow: clip;
    }
    .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    max-width: calc(100% / .75);
    }

    .mdc-notched-outline--notched .mdc-notched-outline__notch {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 8px;
    border-top: none;
    }
    [dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {
    /* @noflip */
    padding-left: 8px;
    /* @noflip */
    padding-right: 0;
    }

    .mdc-notched-outline--no-label .mdc-notched-outline__notch {
    padding: 0;
    }

    .mdc-radio {
    display: inline-block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    /* @alternate */
    will-change: opacity, transform, border-color, color;
    }
    .mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {
    border-color: rgba(0, 0, 0, 0.54);
    }
    .mdc-radio .mdc-radio__native-control:enabled:checked + .mdc-radio__background .mdc-radio__outer-circle {
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-radio .mdc-radio__native-control:enabled + .mdc-radio__background .mdc-radio__inner-circle {
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-radio .mdc-radio__background::before {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-radio .mdc-radio__background::before {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-radio__background {
    display: inline-block;
    position: absolute;
    left: 10px;
    box-sizing: border-box;
    width: 50%;
    height: 50%;
    }
    .mdc-radio__background::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-radio__outer-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-radio__inner-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    }
    .mdc-radio__native-control {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
    z-index: 1;
    }

    .mdc-radio__native-control:checked + .mdc-radio__background,
    .mdc-radio__native-control:disabled + .mdc-radio__background {
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }
    .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,
    .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }
    .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,
    .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-radio--disabled {
    cursor: default;
    pointer-events: none;
    }

    .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-radio__native-control:disabled + .mdc-radio__background,
    [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background {
    cursor: default;
    }
    .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,
    [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {
    border-color: rgba(0, 0, 0, 0.26);
    }
    .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,
    [aria-disabled=true] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {
    border-color: rgba(0, 0, 0, 0.26);
    }

    .mdc-radio__native-control:focus + .mdc-radio__background::before {
    -webkit-transform: scale(2, 2);
            transform: scale(2, 2);
    opacity: 0.12;
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    .mdc-radio {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-radio::before, .mdc-radio::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-radio::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-radio.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-radio.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-radio.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-radio.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-radio::before, .mdc-radio::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-radio.mdc-ripple-upgraded::before, .mdc-radio.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-radio.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-radio::before, .mdc-radio::after {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-radio::before, .mdc-radio::after {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-radio:hover::before {
    opacity: 0.04;
    }
    .mdc-radio:not(.mdc-ripple-upgraded):focus::before, .mdc-radio.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-radio:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-radio:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-radio.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before {
    content: none;
    }

    .mdc-ripple-surface {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    position: relative;
    outline: none;
    overflow: hidden;
    }
    .mdc-ripple-surface::before, .mdc-ripple-surface::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-ripple-surface::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-ripple-surface.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-ripple-surface.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-ripple-surface::before, .mdc-ripple-surface::after {
    background-color: #000;
    }
    .mdc-ripple-surface:hover::before {
    opacity: 0.04;
    }
    .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    .mdc-ripple-surface::before, .mdc-ripple-surface::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-ripple-surface.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-ripple-surface[data-mdc-ripple-is-unbounded] {
    overflow: visible;
    }
    .mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before, .mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before, .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    .mdc-ripple-surface--primary:hover::before {
    opacity: 0.04;
    }
    .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface--primary.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }
    .mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-ripple-surface--accent:hover::before {
    opacity: 0.04;
    }
    .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-ripple-surface--accent.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    @-webkit-keyframes mdc-select-float-native-control {
    0% {
        -webkit-transform: translateY(8px);
                transform: translateY(8px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
    }

    @keyframes mdc-select-float-native-control {
    0% {
        -webkit-transform: translateY(8px);
                transform: translateY(8px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
    }
    .mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon {
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    }
    .mdc-select--with-leading-icon .mdc-select__icon {
    display: inline-block;
    position: absolute;
    bottom: 16px;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    fill: currentColor;
    opacity: 0.54;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }

    .mdc-select__icon:not([tabindex]),
    .mdc-select__icon[tabindex="-1"] {
    cursor: default;
    pointer-events: none;
    }

    .mdc-select-helper-text {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin: 0;
    transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    will-change: opacity;
    }
    .mdc-select-helper-text::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
    }

    .mdc-select-helper-text--persistent {
    transition: none;
    opacity: 1;
    will-change: initial;
    }

    .mdc-select {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    height: 56px;
    overflow: hidden;
    /* @alternate */
    will-change: opacity, transform, color;
    }
    .mdc-select:not(.mdc-select--disabled) {
    background-color: whitesmoke;
    }
    .mdc-select::before, .mdc-select::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-select::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-select.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-select.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-select.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-select.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-select.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-select::before, .mdc-select::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-select.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-select::before, .mdc-select::after {
    background-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-select:hover::before {
    opacity: 0.04;
    }
    .mdc-select:not(.mdc-ripple-upgraded):focus::before, .mdc-select.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,
    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,
    .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {
    border-bottom-color: rgba(0, 0, 0, 0.42);
    }
    .mdc-select:not(.mdc-select--disabled) + .mdc-select-helper-text {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-select, .mdc-select__native-control {
    border-radius: 4px 4px 0 0;
    }
    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {
    color: rgba(98, 0, 238, 0.87);
    }
    .mdc-select:not(.mdc-select--disabled) .mdc-select__native-control:hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-select .mdc-floating-label--float-above {
    -webkit-transform: translateY(-70%) scale(0.75);
            transform: translateY(-70%) scale(0.75);
    }
    .mdc-select .mdc-floating-label {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    top: 21px;
    pointer-events: none;
    }
    [dir=rtl] .mdc-select .mdc-floating-label, .mdc-select .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    .mdc-select.mdc-select--with-leading-icon .mdc-floating-label {
    /* @noflip */
    left: 48px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label, .mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 48px;
    }
    .mdc-select.mdc-select--outlined .mdc-floating-label {
    /* @noflip */
    left: 4px;
    /* @noflip */
    right: initial;
    top: 17px;
    }
    [dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label, .mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 4px;
    }
    .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label {
    /* @noflip */
    left: 36px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label, .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 36px;
    }
    .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above {
    /* @noflip */
    left: 36px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above, .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 36px;
    }
    .mdc-select__dropdown-icon {
    background: url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;
    /* @noflip */
    left: auto;
    /* @noflip */
    right: 8px;
    position: absolute;
    bottom: 16px;
    width: 24px;
    height: 24px;
    transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    }
    [dir=rtl] .mdc-select__dropdown-icon, .mdc-select__dropdown-icon[dir=rtl] {
    /* @noflip */
    left: 8px;
    /* @noflip */
    right: auto;
    }
    .mdc-select--focused .mdc-select__dropdown-icon {
    background: url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%236200ee%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;
    -webkit-transform: rotate(180deg) translateY(-5px);
            transform: rotate(180deg) translateY(-5px);
    transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-select__native-control {
    padding-top: 20px;
    }
    .mdc-select.mdc-select--focused .mdc-line-ripple::after {
    -webkit-transform: scale(1, 2);
            transform: scale(1, 2);
    opacity: 1;
    }

    .mdc-select + .mdc-select-helper-text {
    margin-right: 12px;
    margin-left: 12px;
    }
    .mdc-select--outlined + .mdc-select-helper-text {
    margin-right: 16px;
    margin-left: 16px;
    }

    .mdc-select--focused + .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg) {
    opacity: 1;
    }

    .mdc-select__selected-text {
    min-width: 200px;
    padding-top: 22px;
    }

    .mdc-select__native-control,
    .mdc-select__selected-text {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 52px;
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding-top: 20px;
    padding-bottom: 4px;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    background-color: transparent;
    color: inherit;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    }
    [dir=rtl] .mdc-select__native-control, .mdc-select__native-control[dir=rtl],
    [dir=rtl] .mdc-select__selected-text,
    .mdc-select__selected-text[dir=rtl] {
    /* @noflip */
    padding-left: 52px;
    /* @noflip */
    padding-right: 16px;
    }
    .mdc-select__native-control::-ms-expand,
    .mdc-select__selected-text::-ms-expand {
    display: none;
    }
    .mdc-select__native-control::-ms-value,
    .mdc-select__selected-text::-ms-value {
    background-color: transparent;
    color: inherit;
    }
    @-moz-document url-prefix("") {
    .mdc-select__native-control,
    .mdc-select__selected-text {
        text-indent: -2px;
    }
    }

    .mdc-select--outlined {
    border: none;
    overflow: visible;
    }
    .mdc-select--outlined:not(.mdc-select--disabled) {
    background-color: transparent;
    }
    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,
    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,
    .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.24);
    }
    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing {
    border-width: 2px;
    }
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-select--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
    }
    .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    [dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    [dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    .mdc-select--outlined .mdc-select__native-control {
    border-radius: 4px;
    }
    .mdc-select--outlined::before, .mdc-select--outlined::after {
    content: none;
    }
    .mdc-select--outlined:not(.mdc-select--disabled) {
    background-color: transparent;
    }
    .mdc-select--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) scale(1);
            transform: translateY(-144%) scale(1);
    }
    .mdc-select--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
    }
    .mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) scale(0.75);
            transform: translateY(-130%) scale(0.75);
    }
    .mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-select--outlined .mdc-select__native-control,
    .mdc-select--outlined .mdc-select__selected-text {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 52px;
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    background-color: transparent;
    z-index: 1;
    }
    [dir=rtl] .mdc-select--outlined .mdc-select__native-control, .mdc-select--outlined .mdc-select__native-control[dir=rtl],
    [dir=rtl] .mdc-select--outlined .mdc-select__selected-text,
    .mdc-select--outlined .mdc-select__selected-text[dir=rtl] {
    /* @noflip */
    padding-left: 52px;
    /* @noflip */
    padding-right: 16px;
    }
    .mdc-select--outlined .mdc-select__selected-text {
    padding-top: 14px;
    }
    .mdc-select--outlined .mdc-select__icon {
    z-index: 2;
    }
    .mdc-select--outlined .mdc-floating-label {
    line-height: 1.15rem;
    pointer-events: auto;
    }

    .mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__native-control,
    .mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple {
    background-color: #b00020;
    /* @alternate */
    background-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {
    color: #b00020;
    }
    .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid + .mdc-select-helper-text--validation-msg {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__native-control:hover {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing {
    border-width: 2px;
    }
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-select--invalid .mdc-select__dropdown-icon {
    background: url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23b00020%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;
    }
    .mdc-select--invalid + .mdc-select-helper-text--validation-msg {
    opacity: 1;
    }

    .mdc-select--required .mdc-floating-label::after {
    content: "*";
    }

    .mdc-select--disabled {
    background-color: #fafafa;
    cursor: default;
    pointer-events: none;
    }
    .mdc-select--disabled .mdc-floating-label {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-select--disabled .mdc-select__dropdown-icon {
    background: url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.37%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;
    }
    .mdc-select--disabled .mdc-line-ripple {
    display: none;
    }
    .mdc-select--disabled .mdc-select__icon {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-select--disabled .mdc-select__native-control,
    .mdc-select--disabled .mdc-select__selected-text {
    color: rgba(0, 0, 0, 0.37);
    border-bottom-style: dotted;
    }
    .mdc-select--disabled .mdc-select__selected-text {
    pointer-events: none;
    }
    .mdc-select--disabled.mdc-select--outlined {
    background-color: transparent;
    }
    .mdc-select--disabled.mdc-select--outlined .mdc-select__native-control,
    .mdc-select--disabled.mdc-select--outlined .mdc-select__selected-text {
    border-bottom-style: none;
    }
    .mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,
    .mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,
    .mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.16);
    }

    .mdc-select--with-leading-icon .mdc-select__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon, .mdc-select--with-leading-icon .mdc-select__icon[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    .mdc-select--with-leading-icon .mdc-select__native-control,
    .mdc-select--with-leading-icon .mdc-select__selected-text {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 32px;
    }
    [dir=rtl] .mdc-select--with-leading-icon .mdc-select__native-control, .mdc-select--with-leading-icon .mdc-select__native-control[dir=rtl],
    [dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text,
    .mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl] {
    /* @noflip */
    padding-left: 32px;
    /* @noflip */
    padding-right: 48px;
    }
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) translateX(-32px) scale(1);
            transform: translateY(-144%) translateX(-32px) scale(1);
    }
    [dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above, .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-144%) translateX(32px) scale(1);
            transform: translateY(-144%) translateX(32px) scale(1);
    }
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
    }
    .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) translateX(-32px) scale(0.75);
            transform: translateY(-130%) translateX(-32px) scale(0.75);
    }
    [dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
    [dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-130%) translateX(32px) scale(0.75);
            transform: translateY(-130%) translateX(32px) scale(0.75);
    }
    .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1;
            animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1;
    }
    [dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake, .mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1;
            animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1;
    }
    .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text {
    /* @noflip */
    padding-left: 32px;
    /* @noflip */
    padding-right: 32px;
    }
    [dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text, .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl] {
    /* @noflip */
    padding-left: 32px;
    /* @noflip */
    padding-right: 32px;
    }

    .mdc-select__menu .mdc-list .mdc-list-item--selected {
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected::before, .mdc-select__menu .mdc-list .mdc-list-item--selected::after {
    background-color: #000;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-select__menu .mdc-list .mdc-list-item--selected::before, .mdc-select__menu .mdc-list .mdc-list-item--selected::after {
        /* @alternate */
        background-color: var(--mdc-theme-on-surface, #000);
    }
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected:hover::before {
    opacity: 0.04;
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before, .mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon {
    0% {
        -webkit-transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 32px)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
    }
    }

    @keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon {
    0% {
        -webkit-transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 32px)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 32px)) translateY(-130%) scale(0.75);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - -32px)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - -32px)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - -32px)) translateY(-130%) scale(0.75);
    }
    }
    @-webkit-keyframes mdc-slider-emphasize {
    0% {
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
    }
    50% {
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        -webkit-transform: scale(0.85);
                transform: scale(0.85);
    }
    100% {
        -webkit-transform: scale(0.571);
                transform: scale(0.571);
    }
    }
    @keyframes mdc-slider-emphasize {
    0% {
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
    }
    50% {
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        -webkit-transform: scale(0.85);
                transform: scale(0.85);
    }
    100% {
        -webkit-transform: scale(0.571);
                transform: scale(0.571);
    }
    }
    .mdc-slider {
    position: relative;
    width: 100%;
    height: 48px;
    cursor: pointer;
    touch-action: pan-x;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container {
    background-color: rgba(1, 135, 134, 0.26);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker::after,
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container::after {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb {
    fill: #018786;
    /* @alternate */
    fill: var(--mdc-theme-secondary, #018786);
    stroke: #018786;
    /* @alternate */
    stroke: var(--mdc-theme-secondary, #018786);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {
    color: white;
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-dark, white);
    }
    .mdc-slider--disabled {
    cursor: auto;
    }
    .mdc-slider--disabled .mdc-slider__track {
    background-color: #9a9a9a;
    }
    .mdc-slider--disabled .mdc-slider__track-container {
    background-color: rgba(154, 154, 154, 0.26);
    }
    .mdc-slider--disabled .mdc-slider__track-marker::after,
    .mdc-slider--disabled .mdc-slider__track-marker-container::after {
    background-color: #9a9a9a;
    }
    .mdc-slider--disabled .mdc-slider__thumb {
    fill: #9a9a9a;
    stroke: #9a9a9a;
    }
    .mdc-slider--disabled .mdc-slider__thumb {
    /* @alternate */
    stroke: white;
    stroke: var(--mdc-slider-bg-color-behind-component, white);
    }
    .mdc-slider:focus {
    outline: none;
    }
    .mdc-slider__track-container {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    overflow: hidden;
    }
    .mdc-slider__track {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: left top;
            transform-origin: left top;
    will-change: transform;
    }
    .mdc-slider[dir=rtl] .mdc-slider__track, [dir=rtl] .mdc-slider .mdc-slider__track {
    -webkit-transform-origin: right top;
            transform-origin: right top;
    }

    .mdc-slider__track-marker-container {
    display: flex;
    margin-right: 0;
    margin-left: -1px;
    visibility: hidden;
    }
    .mdc-slider[dir=rtl] .mdc-slider__track-marker-container, [dir=rtl] .mdc-slider .mdc-slider__track-marker-container {
    margin-right: -1px;
    margin-left: 0;
    }

    .mdc-slider__track-marker-container::after {
    display: block;
    width: 2px;
    height: 2px;
    content: "";
    }
    .mdc-slider__track-marker {
    flex: 1;
    }
    .mdc-slider__track-marker::after {
    display: block;
    width: 2px;
    height: 2px;
    content: "";
    }
    .mdc-slider__track-marker:first-child::after {
    width: 3px;
    }
    .mdc-slider__thumb-container {
    position: absolute;
    top: 15px;
    left: 0;
    width: 21px;
    height: 100%;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    will-change: transform;
    }
    .mdc-slider__thumb {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: scale(0.571);
            transform: scale(0.571);
    transition: fill 100ms ease-out, stroke 100ms ease-out, -webkit-transform 100ms ease-out;
    transition: transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out;
    transition: transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out, -webkit-transform 100ms ease-out;
    stroke-width: 3.5;
    }
    .mdc-slider__focus-ring {
    width: 21px;
    height: 21px;
    transition: opacity 266.67ms ease-out, background-color 266.67ms ease-out, -webkit-transform 266.67ms ease-out;
    transition: transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out;
    transition: transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out, -webkit-transform 266.67ms ease-out;
    border-radius: 50%;
    opacity: 0;
    }
    .mdc-slider__pin {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin-top: -2px;
    margin-left: -2px;
    -webkit-transform: rotate(-45deg) scale(0) translate(0, 0);
            transform: rotate(-45deg) scale(0) translate(0, 0);
    transition: -webkit-transform 100ms ease-out;
    transition: transform 100ms ease-out;
    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;
    border-radius: 50% 50% 50% 0%;
    z-index: 1;
    }
    .mdc-slider__pin-value-marker {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    }

    .mdc-slider--active .mdc-slider__thumb {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
    }

    .mdc-slider--focus .mdc-slider__thumb {
    -webkit-animation: mdc-slider-emphasize 266.67ms linear;
            animation: mdc-slider-emphasize 266.67ms linear;
    }
    .mdc-slider--focus .mdc-slider__focus-ring {
    -webkit-transform: scale3d(1.55, 1.55, 1.55);
            transform: scale3d(1.55, 1.55, 1.55);
    opacity: 0.25;
    }

    .mdc-slider--in-transit .mdc-slider__thumb {
    transition-delay: 140ms;
    }

    .mdc-slider--in-transit .mdc-slider__thumb-container,
    .mdc-slider--in-transit .mdc-slider__track,
    .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,
    .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track {
    transition: -webkit-transform 80ms ease;
    transition: transform 80ms ease;
    transition: transform 80ms ease, -webkit-transform 80ms ease;
    }

    .mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb {
    -webkit-transform: scale(calc(12 / 21));
            transform: scale(calc(12 / 21));
    }
    .mdc-slider--discrete.mdc-slider--active .mdc-slider__pin {
    -webkit-transform: rotate(-45deg) scale(1) translate(19px, -20px);
            transform: rotate(-45deg) scale(1) translate(19px, -20px);
    }
    .mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb {
    -webkit-animation: none;
            animation: none;
    }
    .mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container {
    visibility: visible;
    }

    .mdc-snackbar {
    z-index: 8;
    margin: 8px;
    display: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    pointer-events: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .mdc-snackbar__surface {
    background-color: #333333;
    }

    .mdc-snackbar__label {
    color: rgba(255, 255, 255, 0.87);
    }

    .mdc-snackbar__surface {
    min-width: 344px;
    }
    @media (max-width: 480px), (max-width: 344px) {
    .mdc-snackbar__surface {
        min-width: 100%;
    }
    }

    .mdc-snackbar__surface {
    max-width: 672px;
    }

    .mdc-snackbar__surface {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-snackbar__surface {
    border-radius: 4px;
    }

    .mdc-snackbar--opening,
    .mdc-snackbar--open,
    .mdc-snackbar--closing {
    display: flex;
    }

    .mdc-snackbar--leading {
    justify-content: flex-start;
    }

    .mdc-snackbar--stacked .mdc-snackbar__surface {
    flex-direction: column;
    align-items: flex-start;
    }
    .mdc-snackbar--stacked .mdc-snackbar__actions {
    align-self: flex-end;
    margin-bottom: 8px;
    }

    .mdc-snackbar__surface {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    opacity: 0;
    }
    .mdc-snackbar--open .mdc-snackbar__surface {
    -webkit-transform: scale(1);
            transform: scale(1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    opacity: 1;
    pointer-events: auto;
    }
    .mdc-snackbar--closing .mdc-snackbar__surface {
    -webkit-transform: scale(1);
            transform: scale(1);
    transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
    }

    .mdc-snackbar__label {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 14px 16px;
    }

    .mdc-snackbar__label::before {
    display: inline;
    content: attr(data-mdc-snackbar-label-text);
    }

    .mdc-snackbar__actions {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-sizing: border-box;
    }
    [dir=rtl] .mdc-snackbar__actions, .mdc-snackbar__actions[dir=rtl] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }

    .mdc-snackbar__action:not(:disabled) {
    color: #bb86fc;
    }
    .mdc-snackbar__action::before, .mdc-snackbar__action::after {
    background-color: #bb86fc;
    }
    .mdc-snackbar__action:hover::before {
    opacity: 0.08;
    }
    .mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before, .mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-snackbar__action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-snackbar__action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }

    .mdc-snackbar__dismiss {
    color: rgba(255, 255, 255, 0.87);
    }
    .mdc-snackbar__dismiss::before, .mdc-snackbar__dismiss::after {
    background-color: rgba(255, 255, 255, 0.87);
    }
    .mdc-snackbar__dismiss:hover::before {
    opacity: 0.08;
    }
    .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before, .mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-snackbar__dismiss.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }

    .mdc-snackbar__dismiss.mdc-snackbar__dismiss {
    width: 36px;
    height: 36px;
    padding: 9px;
    font-size: 18px;
    }
    .mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,
    .mdc-snackbar__dismiss.mdc-snackbar__dismiss img {
    width: 18px;
    height: 18px;
    }

    .mdc-snackbar__action + .mdc-snackbar__dismiss {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-snackbar__action + .mdc-snackbar__dismiss, .mdc-snackbar__action + .mdc-snackbar__dismiss[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    }

    .mdc-switch {
    display: inline-block;
    position: relative;
    outline: none;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    .mdc-switch.mdc-switch--checked .mdc-switch__track {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-switch.mdc-switch--checked .mdc-switch__thumb {
    background-color: #018786;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786);
    border-color: #018786;
    /* @alternate */
    border-color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
    background-color: #000;
    border-color: #000;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
    background-color: #fff;
    border-color: #fff;
    }

    .mdc-switch__native-control {
    /* @noflip */
    left: 0;
    /* @noflip */
    right: initial;
    position: absolute;
    top: 0;
    width: 68px;
    height: 48px;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    pointer-events: auto;
    }
    [dir=rtl] .mdc-switch__native-control, .mdc-switch__native-control[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 0;
    }

    .mdc-switch__track {
    box-sizing: border-box;
    width: 32px;
    height: 14px;
    border: 1px solid;
    border-radius: 7px;
    opacity: 0.38;
    transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-switch__thumb-underlay {
    /* @noflip */
    left: -18px;
    /* @noflip */
    right: initial;
    display: flex;
    position: absolute;
    top: -17px;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    -webkit-transform: translateX(0);
            transform: translateX(0);
    transition: background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    [dir=rtl] .mdc-switch__thumb-underlay, .mdc-switch__thumb-underlay[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: -18px;
    }

    .mdc-switch__thumb {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 10px solid;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    }

    .mdc-switch--checked .mdc-switch__track {
    opacity: 0.54;
    }
    .mdc-switch--checked .mdc-switch__thumb-underlay {
    -webkit-transform: translateX(20px);
            transform: translateX(20px);
    }
    [dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay, .mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl] {
    -webkit-transform: translateX(-20px);
            transform: translateX(-20px);
    }
    .mdc-switch--checked .mdc-switch__native-control {
    -webkit-transform: translateX(-20px);
            transform: translateX(-20px);
    }
    [dir=rtl] .mdc-switch--checked .mdc-switch__native-control, .mdc-switch--checked .mdc-switch__native-control[dir=rtl] {
    -webkit-transform: translateX(20px);
            transform: translateX(20px);
    }

    .mdc-switch--disabled {
    opacity: 0.38;
    pointer-events: none;
    }
    .mdc-switch--disabled .mdc-switch__thumb {
    border-width: 1px;
    }
    .mdc-switch--disabled .mdc-switch__native-control {
    cursor: default;
    pointer-events: none;
    }

    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before, .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after {
    background-color: #9e9e9e;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before {
    opacity: 0.08;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before, .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }

    .mdc-switch__thumb-underlay {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    }
    .mdc-switch__thumb-underlay::before, .mdc-switch__thumb-underlay::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-switch__thumb-underlay::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-switch__thumb-underlay::before, .mdc-switch__thumb-underlay::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded::before, .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-switch__thumb-underlay::before, .mdc-switch__thumb-underlay::after {
    background-color: #018786;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-switch__thumb-underlay::before, .mdc-switch__thumb-underlay::after {
        /* @alternate */
        background-color: var(--mdc-theme-secondary, #018786);
    }
    }
    .mdc-switch__thumb-underlay:hover::before {
    opacity: 0.04;
    }
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before, .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    .mdc-tab {
    position: relative;
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    box-sizing: border-box;
    height: 48px;
    padding: 0 24px;
    border: none;
    outline: none;
    background: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    z-index: 1;
    }
    .mdc-tab .mdc-tab__text-label {
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    }
    .mdc-tab .mdc-tab__icon {
    color: #000;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000);
    fill: currentColor;
    }
    .mdc-tab::-moz-focus-inner {
    padding: 0;
    border: 0;
    }

    .mdc-tab--min-width {
    flex: 0 1 auto;
    }

    .mdc-tab__ripple {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    }
    .mdc-tab__ripple::before, .mdc-tab__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-tab__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-tab__ripple.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-tab__ripple.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-tab__ripple::before, .mdc-tab__ripple::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-tab__ripple.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-tab__ripple::before, .mdc-tab__ripple::after {
    background-color: #6200ee;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-tab__ripple::before, .mdc-tab__ripple::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee);
    }
    }
    .mdc-tab__ripple:hover::before {
    opacity: 0.04;
    }
    .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before, .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-tab__ripple.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
    }

    .mdc-tab__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    pointer-events: none;
    }

    .mdc-tab__text-label,
    .mdc-tab__icon {
    transition: 150ms color linear, 150ms opacity linear;
    z-index: 2;
    }

    .mdc-tab__text-label {
    display: inline-block;
    opacity: 0.6;
    line-height: 1;
    }

    .mdc-tab__icon {
    width: 24px;
    height: 24px;
    opacity: 0.54;
    font-size: 24px;
    }

    .mdc-tab--stacked {
    height: 72px;
    }

    .mdc-tab--stacked .mdc-tab__content {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    }

    .mdc-tab--stacked .mdc-tab__icon {
    padding-top: 12px;
    }

    .mdc-tab--stacked .mdc-tab__text-label {
    padding-bottom: 16px;
    }

    .mdc-tab--active .mdc-tab__text-label {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-tab--active .mdc-tab__icon {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee);
    fill: currentColor;
    }
    .mdc-tab--active .mdc-tab__text-label,
    .mdc-tab--active .mdc-tab__icon {
    transition-delay: 100ms;
    opacity: 1;
    }

    .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {
    /* @noflip */
    padding-left: 8px;
    /* @noflip */
    padding-right: 0;
    }
    [dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label, .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 8px;
    }

    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    .mdc-tab-bar {
    width: 100%;
    }

    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    .mdc-tab-indicator {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    }
    .mdc-tab-indicator > .mdc-tab-indicator__content--underline {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-tab-indicator > .mdc-tab-indicator__content--underline {
    height: 2px;
    }
    .mdc-tab-indicator > .mdc-tab-indicator__content--icon {
    color: #018786;
    /* @alternate */
    color: var(--mdc-theme-secondary, #018786);
    }
    .mdc-tab-indicator > .mdc-tab-indicator__content--icon {
    height: 34px;
    font-size: 34px;
    }

    .mdc-tab-indicator__content {
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 0;
    }

    .mdc-tab-indicator__content--underline {
    align-self: flex-end;
    width: 100%;
    }

    .mdc-tab-indicator__content--icon {
    align-self: center;
    margin: 0 auto;
    }

    .mdc-tab-indicator--active > .mdc-tab-indicator__content {
    opacity: 1;
    }

    .mdc-tab-indicator > .mdc-tab-indicator__content {
    transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-tab-indicator--no-transition > .mdc-tab-indicator__content {
    transition: none;
    }

    .mdc-tab-indicator--fade > .mdc-tab-indicator__content {
    transition: 150ms opacity linear;
    }

    .mdc-tab-indicator--active.mdc-tab-indicator--fade > .mdc-tab-indicator__content {
    transition-delay: 100ms;
    }

    /**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */
    .mdc-tab-scroller {
    overflow-y: hidden;
    }

    .mdc-tab-scroller__test {
    position: absolute;
    top: -9999px;
    width: 100px;
    height: 100px;
    overflow-x: scroll;
    }

    .mdc-tab-scroller__scroll-area {
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: hidden;
    }

    .mdc-tab-scroller__scroll-area::-webkit-scrollbar,
    .mdc-tab-scroller__test::-webkit-scrollbar {
    display: none;
    }

    .mdc-tab-scroller__scroll-area--scroll {
    overflow-x: scroll;
    }

    .mdc-tab-scroller__scroll-content {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    -webkit-transform: none;
            transform: none;
    will-change: transform;
    }

    .mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {
    justify-content: flex-start;
    }

    .mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {
    justify-content: flex-end;
    }

    .mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {
    justify-content: center;
    }

    .mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {
    -webkit-overflow-scrolling: auto;
    }

    .mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {
    transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-text-field-helper-text {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin: 0;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    will-change: opacity;
    }
    .mdc-text-field-helper-text::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
    }

    .mdc-text-field-helper-text--persistent {
    transition: none;
    opacity: 1;
    will-change: initial;
    }

    .mdc-text-field-character-counter {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    /* @noflip */
    margin-left: auto;
    /* @noflip */
    margin-right: 0;
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 0;
    white-space: nowrap;
    }
    .mdc-text-field-character-counter::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
    }
    [dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: auto;
    }
    [dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 16px;
    }

    .mdc-text-field--with-leading-icon .mdc-text-field__icon,
    .mdc-text-field--with-trailing-icon .mdc-text-field__icon {
    position: absolute;
    bottom: 16px;
    cursor: pointer;
    }

    .mdc-text-field__icon:not([tabindex]),
    .mdc-text-field__icon[tabindex="-1"] {
    cursor: default;
    pointer-events: none;
    }

    .mdc-text-field {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    border-radius: 4px 4px 0 0;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    height: 56px;
    overflow: hidden;
    /* @alternate */
    will-change: opacity, transform, color;
    }
    .mdc-text-field::before, .mdc-text-field::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-text-field::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-text-field.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-text-field.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-text-field.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-text-field.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-text-field::before, .mdc-text-field::after {
    background-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-text-field:hover::before {
    opacity: 0.04;
    }
    .mdc-text-field:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
    }
    .mdc-text-field::before, .mdc-text-field::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
    }
    .mdc-text-field.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.87);
    }
    .mdc-text-field .mdc-text-field__input {
    caret-color: #6200ee;
    /* @alternate */
    caret-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
    border-bottom-color: rgba(0, 0, 0, 0.42);
    }
    .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-text-field .mdc-line-ripple {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
    border-bottom-color: rgba(0, 0, 0, 0.12);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,
    .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.6);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) {
    background-color: whitesmoke;
    }
    .mdc-text-field .mdc-floating-label {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    top: 18px;
    pointer-events: none;
    }
    [dir=rtl] .mdc-text-field .mdc-floating-label, .mdc-text-field .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    .mdc-text-field--textarea .mdc-floating-label {
    /* @noflip */
    left: 4px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--textarea .mdc-floating-label, .mdc-text-field--textarea .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 4px;
    }
    .mdc-text-field--outlined .mdc-floating-label {
    /* @noflip */
    left: 4px;
    /* @noflip */
    right: initial;
    top: 17px;
    }
    [dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 4px;
    }
    .mdc-text-field--outlined--with-leading-icon .mdc-floating-label {
    /* @noflip */
    left: 36px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 36px;
    }
    .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above {
    /* @noflip */
    left: 40px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 40px;
    }

    .mdc-text-field__input {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    align-self: flex-end;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 16px 6px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    }
    .mdc-text-field__input::-webkit-input-placeholder {
    transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field__input:-ms-input-placeholder {
    transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field__input::-ms-input-placeholder {
    transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field__input::placeholder {
    transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field__input:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.54) !important;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input::-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input::-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-ms-input-placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input::placeholder, .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
    }
    .mdc-text-field__input:focus {
    outline: none;
    }
    .mdc-text-field__input:invalid {
    box-shadow: none;
    }
    .mdc-text-field__input:-webkit-autofill {
    z-index: auto !important;
    }
    .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
    padding: 16px;
    }

    .mdc-text-field__input:-webkit-autofill + .mdc-floating-label {
    -webkit-transform: translateY(-50%) scale(0.75);
            transform: translateY(-50%) scale(0.75);
    cursor: auto;
    }

    .mdc-text-field--outlined {
    border: none;
    overflow: visible;
    }
    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.24);
    }
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-text-field--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
    }
    .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    [dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    [dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    .mdc-text-field--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) scale(1);
            transform: translateY(-144%) scale(1);
    }
    .mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
    }
    .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) scale(0.75);
            transform: translateY(-130%) scale(0.75);
    }
    .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-text-field--outlined::before, .mdc-text-field--outlined::after {
    content: none;
    }
    .mdc-text-field--outlined:not(.mdc-text-field--disabled) {
    background-color: transparent;
    }
    .mdc-text-field--outlined .mdc-text-field__input {
    display: flex;
    padding: 12px 16px 14px;
    border: none !important;
    background-color: transparent;
    z-index: 1;
    }
    .mdc-text-field--outlined .mdc-text-field__icon {
    z-index: 2;
    }

    .mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing {
    border-width: 2px;
    }

    .mdc-text-field--outlined.mdc-text-field--disabled {
    background-color: transparent;
    }
    .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.06);
    }
    .mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
    border-bottom: none;
    }

    .mdc-text-field--outlined.mdc-text-field--dense {
    height: 48px;
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
    -webkit-transform: translateY(-134%) scale(1);
            transform: translateY(-134%) scale(1);
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
    font-size: 0.8rem;
    }
    .mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-120%) scale(0.8);
            transform: translateY(-120%) scale(0.8);
    }
    .mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1;
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input {
    padding: 12px 12px 7px;
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
    top: 14px;
    }
    .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon {
    top: 12px;
    }

    .mdc-text-field--with-leading-icon .mdc-text-field__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    .mdc-text-field--with-leading-icon .mdc-text-field__input {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 16px;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 48px;
    }
    .mdc-text-field--with-leading-icon .mdc-floating-label {
    /* @noflip */
    left: 48px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label, .mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 48px;
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 16px;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 48px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) translateX(-32px) scale(1);
            transform: translateY(-144%) translateX(-32px) scale(1);
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-144%) translateX(32px) scale(1);
            transform: translateY(-144%) translateX(32px) scale(1);
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) translateX(-32px) scale(0.75);
            transform: translateY(-130%) translateX(-32px) scale(0.75);
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-130%) translateX(32px) scale(0.75);
            transform: translateY(-130%) translateX(32px) scale(0.75);
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
    /* @noflip */
    left: 36px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 36px;
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
    -webkit-transform: translateY(-134%) translateX(-21px) scale(1);
            transform: translateY(-134%) translateX(-21px) scale(1);
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-134%) translateX(21px) scale(1);
            transform: translateY(-134%) translateX(21px) scale(1);
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
    font-size: 0.8rem;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-120%) translateX(-21px) scale(0.8);
            transform: translateY(-120%) translateX(-21px) scale(0.8);
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-120%) translateX(21px) scale(0.8);
            transform: translateY(-120%) translateX(21px) scale(0.8);
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
    /* @noflip */
    left: 32px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 32px;
    }

    .mdc-text-field--with-trailing-icon .mdc-text-field__icon {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 12px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: 12px;
    /* @noflip */
    right: initial;
    }
    .mdc-text-field--with-trailing-icon .mdc-text-field__input {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 48px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 16px;
    }
    .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }
    .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 48px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 16px;
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: auto;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: auto;
    /* @noflip */
    right: 16px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon {
    /* @noflip */
    right: 12px;
    /* @noflip */
    left: auto;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    right: auto;
    /* @noflip */
    left: 12px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 48px;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 48px;
    /* @noflip */
    padding-right: 48px;
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,
    .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
    bottom: 16px;
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon {
    /* @noflip */
    left: 12px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 12px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input {
    /* @noflip */
    padding-left: 44px;
    /* @noflip */
    padding-right: 16px;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 44px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label {
    /* @noflip */
    left: 44px;
    /* @noflip */
    right: initial;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 44px;
    }

    .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 12px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: 12px;
    /* @noflip */
    right: initial;
    }
    .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 44px;
    }
    [dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 44px;
    /* @noflip */
    padding-right: 16px;
    }

    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
    /* @noflip */
    left: 12px;
    /* @noflip */
    right: auto;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    left: auto;
    /* @noflip */
    right: 12px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon {
    /* @noflip */
    right: 12px;
    /* @noflip */
    left: auto;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
    /* @noflip */
    right: auto;
    /* @noflip */
    left: 12px;
    }
    .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {
    /* @noflip */
    padding-left: 44px;
    /* @noflip */
    padding-right: 44px;
    }
    [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    padding-left: 44px;
    /* @noflip */
    padding-right: 44px;
    }

    .mdc-text-field--dense .mdc-floating-label--float-above {
    -webkit-transform: translateY(-70%) scale(0.8);
            transform: translateY(-70%) scale(0.8);
    }
    .mdc-text-field--dense .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-dense 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-dense 250ms 1;
    }
    .mdc-text-field--dense .mdc-text-field__input {
    padding: 12px 12px 0;
    }
    .mdc-text-field--dense .mdc-floating-label {
    font-size: 0.813rem;
    }
    .mdc-text-field--dense .mdc-floating-label--float-above {
    font-size: 0.813rem;
    }

    .mdc-text-field__input:required ~ .mdc-floating-label::after,
    .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
    margin-left: 1px;
    content: "*";
    }

    .mdc-text-field--textarea {
    display: inline-flex;
    width: auto;
    height: auto;
    transition: none;
    overflow: visible;
    }
    .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.24);
    }
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
    }
    .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    }
    .mdc-text-field--textarea .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
    }
    .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    [dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {
    /* @noflip */
    border-radius: 0 4px 4px 0;
    }
    [dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-radius: 4px 0 0 4px;
    }
    .mdc-text-field--textarea::before, .mdc-text-field--textarea::after {
    content: none;
    }
    .mdc-text-field--textarea:not(.mdc-text-field--disabled) {
    background-color: transparent;
    }
    .mdc-text-field--textarea .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) scale(1);
            transform: translateY(-144%) scale(1);
    }
    .mdc-text-field--textarea .mdc-floating-label--float-above {
    font-size: 0.75rem;
    }
    .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) scale(0.75);
            transform: translateY(-130%) scale(0.75);
    }
    .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
    .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
    }
    .mdc-text-field--textarea .mdc-text-field-character-counter {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    position: absolute;
    bottom: 13px;
    }
    [dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter, .mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
    }
    .mdc-text-field--textarea .mdc-text-field__input {
    align-self: auto;
    box-sizing: border-box;
    height: auto;
    margin: 8px 1px 1px 0;
    padding: 0 16px 16px;
    border: none;
    }
    .mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input {
    margin-bottom: 28px;
    padding-bottom: 0;
    }
    .mdc-text-field--textarea .mdc-floating-label {
    top: 17px;
    bottom: auto;
    width: auto;
    pointer-events: none;
    }
    .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing {
    border-width: 2px;
    }

    .mdc-text-field--fullwidth {
    width: 100%;
    }
    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {
    display: block;
    }
    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after {
    content: none;
    }
    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled) {
    background-color: transparent;
    }
    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input {
    padding: 0;
    }
    .mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input {
    resize: vertical;
    }

    .mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
    }

    .mdc-text-field-helper-line {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    }
    .mdc-text-field--dense + .mdc-text-field-helper-line {
    margin-bottom: 4px;
    }
    .mdc-text-field + .mdc-text-field-helper-line {
    padding-right: 16px;
    padding-left: 16px;
    }

    .mdc-form-field > .mdc-text-field + label {
    align-self: flex-start;
    }

    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(98, 0, 238, 0.87);
    }
    .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
    .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
    opacity: 1;
    }

    .mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    }

    .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple {
    background-color: #b00020;
    /* @alternate */
    background-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid .mdc-text-field__input {
    caret-color: #b00020;
    /* @alternate */
    caret-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon ~ .mdc-text-field__icon {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
    opacity: 1;
    }

    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }

    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
    .mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
    }

    .mdc-text-field--disabled {
    background-color: #fafafa;
    border-bottom: none;
    pointer-events: none;
    }
    .mdc-text-field--disabled .mdc-text-field__input {
    border-bottom-color: rgba(0, 0, 0, 0.06);
    }
    .mdc-text-field--disabled .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-text-field--disabled .mdc-floating-label {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-text-field--disabled .mdc-text-field-character-counter,
    .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.37);
    }
    .mdc-text-field--disabled .mdc-text-field__icon {
    color: rgba(0, 0, 0, 0.3);
    }
    .mdc-text-field--disabled:not(.mdc-text-field--textarea) {
    border-bottom-color: rgba(0, 0, 0, 0.12);
    }
    .mdc-text-field--disabled .mdc-floating-label {
    cursor: default;
    }

    .mdc-text-field--textarea.mdc-text-field--disabled {
    background-color: transparent;
    /* @alternate */
    background-color: #f9f9f9;
    }
    .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,
    .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,
    .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.06);
    }
    .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input {
    border-bottom: none;
    }

    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
    }
    }

    @keyframes mdc-floating-label-shake-float-above-text-field-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense {
    0% {
        -webkit-transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl {
    0% {
        -webkit-transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
    }
    100% {
        -webkit-transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
                transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
    }
    }
    @-webkit-keyframes mdc-floating-label-shake-float-above-textarea {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    }
    @keyframes mdc-floating-label-shake-float-above-textarea {
    0% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
        -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
        -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
                transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    }
    :root {
    --mdc-theme-primary: #6200ee;
    --mdc-theme-secondary: #018786;
    --mdc-theme-background: #fff;
    --mdc-theme-surface: #fff;
    --mdc-theme-error: #b00020;
    --mdc-theme-on-primary: #fff;
    --mdc-theme-on-secondary: #fff;
    --mdc-theme-on-surface: #000;
    --mdc-theme-on-error: #fff;
    --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-dark: white;
    --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
    --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
    }

    .mdc-theme--primary {
    color: #6200ee !important;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee) !important;
    }

    .mdc-theme--secondary {
    color: #018786 !important;
    /* @alternate */
    color: var(--mdc-theme-secondary, #018786) !important;
    }

    .mdc-theme--background {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-background, #fff);
    }

    .mdc-theme--surface {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    }

    .mdc-theme--error {
    color: #b00020 !important;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020) !important;
    }

    .mdc-theme--on-primary {
    color: #fff !important;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff) !important;
    }

    .mdc-theme--on-secondary {
    color: #fff !important;
    /* @alternate */
    color: var(--mdc-theme-on-secondary, #fff) !important;
    }

    .mdc-theme--on-surface {
    color: #000 !important;
    /* @alternate */
    color: var(--mdc-theme-on-surface, #000) !important;
    }

    .mdc-theme--on-error {
    color: #fff !important;
    /* @alternate */
    color: var(--mdc-theme-on-error, #fff) !important;
    }

    .mdc-theme--text-primary-on-background {
    color: rgba(0, 0, 0, 0.87) !important;
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important;
    }

    .mdc-theme--text-secondary-on-background {
    color: rgba(0, 0, 0, 0.54) !important;
    /* @alternate */
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important;
    }

    .mdc-theme--text-hint-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-disabled-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-icon-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-primary-on-light {
    color: rgba(0, 0, 0, 0.87) !important;
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important;
    }

    .mdc-theme--text-secondary-on-light {
    color: rgba(0, 0, 0, 0.54) !important;
    /* @alternate */
    color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important;
    }

    .mdc-theme--text-hint-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-disabled-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-icon-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    /* @alternate */
    color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important;
    }

    .mdc-theme--text-primary-on-dark {
    color: white !important;
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-dark, white) !important;
    }

    .mdc-theme--text-secondary-on-dark {
    color: rgba(255, 255, 255, 0.7) !important;
    /* @alternate */
    color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important;
    }

    .mdc-theme--text-hint-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    /* @alternate */
    color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important;
    }

    .mdc-theme--text-disabled-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    /* @alternate */
    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important;
    }

    .mdc-theme--text-icon-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    /* @alternate */
    color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important;
    }

    .mdc-theme--primary-bg {
    background-color: #6200ee !important;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee) !important;
    }

    .mdc-theme--secondary-bg {
    background-color: #018786 !important;
    /* @alternate */
    background-color: var(--mdc-theme-secondary, #018786) !important;
    }

    .mdc-toolbar {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    color: white;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    }
    .mdc-toolbar .mdc-toolbar__icon {
    color: white;
    }
    .mdc-toolbar .mdc-toolbar__icon::before, .mdc-toolbar .mdc-toolbar__icon::after {
    background-color: white;
    }
    .mdc-toolbar .mdc-toolbar__icon:hover::before {
    opacity: 0.08;
    }
    .mdc-toolbar .mdc-toolbar__icon:not(.mdc-ripple-upgraded):focus::before, .mdc-toolbar .mdc-toolbar__icon.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-toolbar .mdc-toolbar__icon:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-toolbar .mdc-toolbar__icon:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-toolbar .mdc-toolbar__icon.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }
    .mdc-toolbar__row {
    display: flex;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 64px;
    }
    @media (max-width: 959px) and (orientation: landscape) {
    .mdc-toolbar__row {
        min-height: 48px;
    }
    }
    @media (max-width: 599px) {
    .mdc-toolbar__row {
        min-height: 56px;
    }
    }
    .mdc-toolbar__section {
    display: inline-flex;
    flex: 1;
    align-items: start;
    justify-content: center;
    box-sizing: border-box;
    min-width: 0;
    height: 100%;
    padding: 8px;
    z-index: 1;
    }
    @media (max-width: 959px) and (orientation: landscape) {
    .mdc-toolbar__section {
        padding: 0;
    }
    }
    @media (max-width: 599px) {
    .mdc-toolbar__section {
        padding: 4px 0;
    }
    }
    .mdc-toolbar__section--align-start {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
    justify-content: flex-start;
    order: -1;
    }
    [dir=rtl] .mdc-toolbar__section--align-start, .mdc-toolbar__section--align-start[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
    }
    @media (max-width: 959px) and (orientation: landscape) {
    .mdc-toolbar__section--align-start {
        /* @noflip */
        padding-left: 4px;
        /* @noflip */
        padding-right: 0;
    }
    [dir=rtl] .mdc-toolbar__section--align-start, .mdc-toolbar__section--align-start[dir=rtl] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 4px;
    }
    }
    @media (max-width: 599px) {
    .mdc-toolbar__section--align-start {
        /* @noflip */
        padding-left: 4px;
        /* @noflip */
        padding-right: 0;
    }
    [dir=rtl] .mdc-toolbar__section--align-start, .mdc-toolbar__section--align-start[dir=rtl] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 4px;
    }
    }
    .mdc-toolbar__section--align-end {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
    justify-content: flex-end;
    order: 1;
    }
    [dir=rtl] .mdc-toolbar__section--align-end, .mdc-toolbar__section--align-end[dir=rtl] {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
    }
    @media (max-width: 959px) and (orientation: landscape) {
    .mdc-toolbar__section--align-end {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 4px;
    }
    [dir=rtl] .mdc-toolbar__section--align-end, .mdc-toolbar__section--align-end[dir=rtl] {
        /* @noflip */
        padding-left: 4px;
        /* @noflip */
        padding-right: 0;
    }
    }
    @media (max-width: 599px) {
    .mdc-toolbar__section--align-end {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 4px;
    }
    [dir=rtl] .mdc-toolbar__section--align-end, .mdc-toolbar__section--align-end[dir=rtl] {
        /* @noflip */
        padding-left: 4px;
        /* @noflip */
        padding-right: 0;
    }
    }
    .mdc-toolbar__title {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* @noflip */
    margin-left: 24px;
    /* @noflip */
    margin-right: 0;
    align-self: center;
    padding: 12px 0;
    line-height: 1.5rem;
    z-index: 1;
    }
    [dir=rtl] .mdc-toolbar__title, .mdc-toolbar__title[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 24px;
    }
    .mdc-toolbar__icon, .mdc-toolbar__menu-icon {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    display: flex;
    position: relative;
    align-items: start;
    justify-content: center;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    padding: 12px;
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }
    .mdc-toolbar__icon::before, .mdc-toolbar__icon::after, .mdc-toolbar__menu-icon::before, .mdc-toolbar__menu-icon::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-toolbar__icon::before, .mdc-toolbar__menu-icon::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded::before, .mdc-toolbar__menu-icon.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded--unbounded::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded--foreground-activation::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-toolbar__icon::before, .mdc-toolbar__icon::after, .mdc-toolbar__menu-icon::before, .mdc-toolbar__menu-icon::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded::before, .mdc-toolbar__icon.mdc-ripple-upgraded::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded::before, .mdc-toolbar__menu-icon.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-toolbar__icon.mdc-ripple-upgraded::after, .mdc-toolbar__menu-icon.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }

    .mdc-toolbar__menu-icon + .mdc-toolbar__title {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 0;
    }
    [dir=rtl] .mdc-toolbar__menu-icon + .mdc-toolbar__title, .mdc-toolbar__menu-icon + .mdc-toolbar__title[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    }

    @media (max-width: 599px) {
    .mdc-toolbar__title {
        /* @noflip */
        margin-left: 16px;
        /* @noflip */
        margin-right: 0;
    }
    [dir=rtl] .mdc-toolbar__title, .mdc-toolbar__title[dir=rtl] {
        /* @noflip */
        margin-left: 0;
        /* @noflip */
        margin-right: 16px;
    }
    }
    .mdc-toolbar--fixed {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    }

    .mdc-toolbar--flexible {
    --mdc-toolbar-ratio-to-extend-flexible: 4;
    }
    .mdc-toolbar--flexible .mdc-toolbar__row:first-child {
    height: 256px;
    height: calc( 64px * var(--mdc-toolbar-ratio-to-extend-flexible, 4) );
    }
    @media (max-width: 599px) {
    .mdc-toolbar--flexible .mdc-toolbar__row:first-child {
        height: 224px;
        height: calc( 56px * var(--mdc-toolbar-ratio-to-extend-flexible, 4) );
    }
    }
    .mdc-toolbar--flexible .mdc-toolbar__row:first-child::after {
    position: absolute;
    content: "";
    }
    .mdc-toolbar--flexible-default-behavior .mdc-toolbar__title {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    align-self: flex-end;
    line-height: 1.5rem;
    }
    .mdc-toolbar--flexible-default-behavior .mdc-toolbar__row:first-child::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease;
    opacity: 1;
    }
    .mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__row:first-child::after {
    opacity: 0;
    }
    .mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__title {
    font-weight: 500;
    }

    .mdc-toolbar--waterfall.mdc-toolbar--fixed {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow;
    }
    .mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--flexible-space-minimized {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    .mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--flexible-space-minimized {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    }
    .mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--fixed-at-last-row {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-toolbar-fixed-adjust {
    padding-top: 64px;
    }
    @media (max-width: 959px) and (max-height: 599px) {
    .mdc-toolbar-fixed-adjust {
        padding-top: 48px;
    }
    }
    @media (max-width: 599px) {
    .mdc-toolbar-fixed-adjust {
        padding-top: 56px;
    }
    }

    .mdc-toolbar__section--shrink-to-fit {
    flex: none;
    }

    .mdc-top-app-bar {
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
    color: white;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    z-index: 4;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon {
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff);
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item::before, .mdc-top-app-bar .mdc-top-app-bar__action-item::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {
    background-color: #fff;
    }
    @supports not (-ms-ime-align: auto) {
    .mdc-top-app-bar .mdc-top-app-bar__action-item::before, .mdc-top-app-bar .mdc-top-app-bar__action-item::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {
        /* @alternate */
        background-color: var(--mdc-theme-on-primary, #fff);
    }
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before {
    opacity: 0.08;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before, .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
    }
    .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,
    .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
    }
    .mdc-top-app-bar__row {
    display: flex;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    }
    .mdc-top-app-bar__section {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    min-width: 0;
    padding: 8px 12px;
    z-index: 1;
    }
    .mdc-top-app-bar__section--align-start {
    justify-content: flex-start;
    order: -1;
    }
    .mdc-top-app-bar__section--align-end {
    justify-content: flex-end;
    order: 1;
    }
    .mdc-top-app-bar__title {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    /* @noflip */
    padding-left: 20px;
    /* @noflip */
    padding-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
    }
    [dir=rtl] .mdc-top-app-bar__title, .mdc-top-app-bar__title[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 20px;
    }
    .mdc-top-app-bar__action-item, .mdc-top-app-bar__navigation-icon {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    display: flex;
    position: relative;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    padding: 12px;
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }
    .mdc-top-app-bar__action-item::before, .mdc-top-app-bar__action-item::after, .mdc-top-app-bar__navigation-icon::before, .mdc-top-app-bar__navigation-icon::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    }
    .mdc-top-app-bar__action-item::before, .mdc-top-app-bar__navigation-icon::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded::before, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded--unbounded::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-activation::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
    .mdc-top-app-bar__action-item::before, .mdc-top-app-bar__action-item::after, .mdc-top-app-bar__navigation-icon::before, .mdc-top-app-bar__navigation-icon::after {
    top: calc(50% - 50%);
    /* @noflip */
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded::before, .mdc-top-app-bar__action-item.mdc-ripple-upgraded::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    /* @noflip */
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded::after, .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
    }

    .mdc-top-app-bar--short-collapsed {
    /* @noflip */
    border-radius: 0 0 24px 0;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed, .mdc-top-app-bar--short-collapsed[dir=rtl] {
    /* @noflip */
    border-radius: 0 0 0 24px;
    }

    .mdc-top-app-bar--short {
    top: 0;
    /* @noflip */
    right: auto;
    /* @noflip */
    left: 0;
    width: 100%;
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    [dir=rtl] .mdc-top-app-bar--short, .mdc-top-app-bar--short[dir=rtl] {
    /* @noflip */
    right: 0;
    /* @noflip */
    left: auto;
    }
    .mdc-top-app-bar--short .mdc-top-app-bar__row {
    height: 56px;
    }
    .mdc-top-app-bar--short .mdc-top-app-bar__section {
    padding: 4px;
    }
    .mdc-top-app-bar--short .mdc-top-app-bar__title {
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
    }

    .mdc-top-app-bar--short-collapsed {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 56px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title {
    display: none;
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item {
    transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {
    width: 112px;
    }
    .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl] {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
    }

    .mdc-top-app-bar--dense .mdc-top-app-bar__row {
    height: 48px;
    }
    .mdc-top-app-bar--dense .mdc-top-app-bar__section {
    padding: 0 4px;
    }
    .mdc-top-app-bar--dense .mdc-top-app-bar__title {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
    }
    [dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title, .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
    }

    .mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 128px;
    }
    .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    align-self: flex-end;
    padding-bottom: 2px;
    }
    .mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,
    .mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon {
    align-self: flex-start;
    }

    .mdc-top-app-bar--fixed {
    transition: box-shadow 200ms linear;
    }

    .mdc-top-app-bar--fixed-scrolled {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 200ms linear;
    }

    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 96px;
    }
    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section {
    padding: 0 12px;
    }
    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    /* @noflip */
    padding-left: 20px;
    /* @noflip */
    padding-right: 0;
    padding-bottom: 9px;
    }
    [dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title, .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 20px;
    }

    .mdc-top-app-bar--fixed-adjust {
    padding-top: 64px;
    }

    .mdc-top-app-bar--dense-fixed-adjust {
    padding-top: 48px;
    }

    .mdc-top-app-bar--short-fixed-adjust {
    padding-top: 56px;
    }

    .mdc-top-app-bar--prominent-fixed-adjust {
    padding-top: 128px;
    }

    .mdc-top-app-bar--dense-prominent-fixed-adjust {
    padding-top: 96px;
    }

    @media (max-width: 599px) {
    .mdc-top-app-bar__row {
        height: 56px;
    }

    .mdc-top-app-bar__section {
        padding: 4px;
    }

    .mdc-top-app-bar--short {
        transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mdc-top-app-bar--short-collapsed {
        transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 12px;
    }
    [dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end, .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl] {
        /* @noflip */
        padding-left: 12px;
        /* @noflip */
        padding-right: 0;
    }

    .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
        padding-bottom: 6px;
    }

    .mdc-top-app-bar--fixed-adjust {
        padding-top: 56px;
    }
    }
    .mdc-typography {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    }

    .mdc-typography--headline1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 300;
    letter-spacing: -0.015625em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--headline2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 3.75rem;
    line-height: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.0083333333em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--headline3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 3rem;
    line-height: 3.125rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--headline4 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.0073529412em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--headline5 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--headline6 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--subtitle1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--subtitle2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.0071428571em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--body1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--body2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--caption {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    }

    .mdc-typography--button {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    }

    .mdc-typography--overline {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.1666666667em;
    text-decoration: none;
    text-transform: uppercase;
    }
`;
