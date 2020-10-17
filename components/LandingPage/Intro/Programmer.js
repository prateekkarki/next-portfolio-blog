/* eslint-disable max-len */
import React, { useRef, useEffect } from 'react';

import anime from 'animejs';
import programmerCss from './programmer.css';

function Programmer() {
  const svgRef = useRef(null);

  useEffect(() => {
    const codeElements = svgRef.current.querySelectorAll(
      '#search, #html, #ide, #handlebar'
    );
    const leaves = svgRef.current.querySelectorAll('#leaves');
    const chair = svgRef.current.querySelectorAll('#chair');
    const programmer = svgRef.current.querySelectorAll('#programmer');
    const laptop = svgRef.current.querySelectorAll('#laptop');
    const table = svgRef.current.querySelectorAll('#table');
    const vase = svgRef.current.querySelectorAll('#vase');
    const base = svgRef.current.querySelectorAll('#base');

    anime({
      targets: [leaves],
      skewX: [-2, 2],
      easing: 'easeInOutQuad',
      duration: 1200,
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: [codeElements],
      scale: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: anime.stagger(150, { start: 2500 }),
    });

    anime({
      targets: [base, vase, table, chair, laptop, programmer],
      translateX: ['400%', 0],
      easing: 'easeInOutQuad',
      duration: 800,
      delay: anime.stagger(180, { start: 1000 }),
    });

    return () => {
      anime.remove([
        leaves,
        codeElements,
        base,
        vase,
        table,
        chair,
        laptop,
        programmer,
      ]);
    };
  });

  return (
    <svg
      ref={svgRef}
      css={programmerCss}
      version="1.1"
      id="programmer_on_workstation"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 431.9 340.5"
      enableBackground="new 0 0 431.9 340.5"
      xmlSpace="preserve"
    >
      <g id="ide">
        <rect x="90.5" y="19.3" fill="#112B46" width="97.6" height="91.1" />
        <rect x="90.5" y="19.3" fill="#1D262D" width="97.6" height="9.6" />
        <path
          fill="#606BF1"
          d="M167,24.3c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S167,23.3,167,24.3z"
        />
        <path
          fill="#FBD15B"
          d="M174.3,24.3c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S174.3,23.3,174.3,24.3z"
        />
        <path
          fill="#FF8578"
          d="M181.2,24.5c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S181.2,23.5,181.2,24.5z"
        />
        <rect x="107.8" y="37.9" fill="#FF8578" width="13.8" height="1.2" />
        <rect x="124.1" y="37.9" fill="#FBD15B" width="13.8" height="1.2" />
        <rect x="112.1" y="44.2" fill="#606BF1" width="21.4" height="1.2" />
        <rect x="137.1" y="44.2" fill="#FF8578" width="10.9" height="1.2" />
        <rect x="119.5" y="50.4" fill="#FBD15B" width="9.4" height="1.2" />
        <rect x="134.4" y="50.4" fill="#FBD15B" width="31.2" height="1.2" />
        <rect x="126.8" y="56.7" fill="#606BF1" width="35.7" height="1.2" />
        <rect x="117.9" y="63" fill="#FF8578" width="11" height="1.2" />
        <rect x="133.6" y="63" fill="#606BF1" width="11" height="1.2" />
        <rect x="107.8" y="95.4" fill="#FF8578" width="16" height="1.2" />
        <rect x="129.4" y="95.4" fill="#FBD15B" width="16" height="1.2" />
        <rect x="150.4" y="95.4" fill="#FF8578" width="16" height="1.2" />
        <rect x="112.1" y="89.2" fill="#606BF1" width="31.2" height="1.2" />
        <rect x="148.2" y="89.2" fill="#FF8578" width="31.2" height="1.2" />
        <rect x="119.5" y="82.9" fill="#FF8578" width="31" height="1.2" />
        <rect x="153.2" y="82.9" fill="#FBD15B" width="8.6" height="1.2" />
        <rect x="117.5" y="76.6" fill="#FBD15B" width="11.7" height="1.2" />
        <rect x="135.4" y="76.6" fill="#606BF1" width="11.7" height="1.2" />
        <rect x="154.5" y="76.6" fill="#FF8578" width="11.7" height="1.2" />
        <rect x="131" y="70.4" fill="#FBD15B" width="16.4" height="1.2" />
        <rect x="108.5" y="70.4" fill="#606BF1" width="16.3" height="1.2" />
        <rect x="98.8" y="36.8" fill="#F9FBFC" width="1.5" height="1.5" />
        <path
          fill="#F9FBFC"
          d="M100.3,91.3h-1.5v-3h1.5V91.3z M100.3,83.8h-1.5v-3h1.5V83.8z M100.3,76.2h-1.5v-3h1.5V76.2z M100.3,68.6
       h-1.5v-3h1.5V68.6z M100.3,61h-1.5v-3h1.5V61z M100.3,53.4h-1.5v-3h1.5V53.4z M100.3,45.9h-1.5v-3h1.5V45.9z"
        />
        <rect x="98.8" y="95.9" fill="#F9FBFC" width="1.5" height="1.5" />
      </g>
      <g id="html">
        <rect x="209" fill="#F57F17" width="80.3" height="49.5" />
        <path
          fill="#F9FBFC"
          d="M240.2,19.9l-9.6,4.1l9.6,4l-1.2,2.9l-11.5-5.1v-3.5l11.5-5.1L240.2,19.9z"
        />
        <path
          fill="#F9FBFC"
          d="M254.3,10.5l-6.9,26.6l-3.3-0.8l7-26.6C251.1,9.7,254.3,10.5,254.3,10.5z"
        />
        <path
          fill="#F9FBFC"
          d="M270.9,22.2v3.5l-11.5,5.1l-1.3-2.9l9.5-4l-9.5-4.1l1.3-2.8L270.9,22.2z"
        />
      </g>
      <g id="handlebar">
        <rect x="286.6" y="95.9" fill="#606BF1" width="45.8" height="32.6" />
        <path
          fill="#F1F2F2"
          d="M305.7,103c-1.5,0-2,0.4-2,1.5v4.9c0,1.9-0.8,2.5-2.1,2.9c1.3,0.2,2.3,1.4,2.1,2.7v0.1v4.9
       c0,1.1,0.5,1.5,2,1.5v2.2c-3.7,0-4.8-1.2-4.8-3.7v-4.7c0-1.3-0.4-1.8-1.6-1.8V111c1.2,0,1.6-0.5,1.6-1.9v-4.7c0-2.5,1-3.7,4.8-3.7
       C305.7,100.7,305.7,103,305.7,103z"
        />
        <path
          fill="#F1F2F2"
          d="M318,104.5v4.7c0,1.3,0.4,1.9,1.6,1.9v2.4c-1.2,0-1.6,0.5-1.6,1.8v4.7c0,2.5-1,3.7-4.8,3.7v-2.2
       c1.5,0,2-0.4,2-1.5v-4.9c0-1.9,0.8-2.5,2.1-2.8c-1.3-0.4-2.1-1-2.1-2.9v-4.9c0-1.1-0.5-1.5-2-1.5v-2.2
       C316.9,100.8,318,102,318,104.5z"
        />
      </g>
      <g id="search">
        <rect x="59.4" y="7.1" fill="#0ABEAD" width="51.3" height="34.3" />
        <g>
          <path
            fill="#F9FBFC"
            d="M76.4,17c-2.8,3.7-2.2,9,1.5,11.8c2.8,2.2,6.8,2.4,9.8,0.4l5.4,5.4c0.2,0.2,0.6,0.2,0.8,0l1.5-1.5
           c0.2-0.2,0.2-0.6,0-0.8L90,26.9c2.4-4,1-9.2-3-11.5C83.5,13.3,79.1,14,76.4,17z M87.2,26.5c-2.3,2.4-6.1,2.4-8.5,0.1
           s-2.4-6.1-0.1-8.5s6.1-2.4,8.5-0.1l0.1,0.1C89.5,20.4,89.5,24.1,87.2,26.5z"
          />
        </g>
      </g>
      <g id="chair">
        <path
          fill="#0A2033"
          d="M257.8,318.9h-6c-0.9,0-1.6-0.7-1.6-1.6v-88.5h9.2v88.5C259.4,318.2,258.7,318.9,257.8,318.9z"
        />
        <path
          fill="#30475E"
          d="M273.8,237.8h-38.1c-3.5,0-6.3-2.8-6.3-6.3v-1.4h50.7v1.4C280.2,234.9,277.3,237.8,273.8,237.8z"
        />
        <path
          fill="#0A2033"
          d="M257.8,330.6h-6c-0.9,0-1.6-0.7-1.6-1.6v-20.5h9.2V329C259.4,329.8,258.7,330.6,257.8,330.6z"
        />
        <path
          fill="#0A2033"
          d="M206.9,325.2c0,3,2.4,5.4,5.4,5.4s5.4-2.4,5.4-5.4s-2.4-5.4-5.4-5.4S206.9,322.2,206.9,325.2z"
        />
        <path
          fill="#0A2033"
          d="M291.9,325.2c0,3,2.4,5.4,5.4,5.4s5.4-2.4,5.4-5.4s-2.4-5.4-5.4-5.4S291.9,322.2,291.9,325.2z"
        />
        <rect x="245.5" y="301.6" fill="#30475E" width="18.6" height="16.2" />
        <path
          fill="#FBD15B"
          d="M302.7,321.6h-95.8v-1.9c0-3.2,2.6-5.8,5.8-5.8H297c3.2,0,5.8,2.6,5.8,5.8L302.7,321.6L302.7,321.6
       L302.7,321.6z"
        />
        <rect x="251.6" y="239.6" fill="#30475E" width="3.2" height="60.6" />
        <path
          fill="#FBD15B"
          d="M291,164.6c-2.1-0.1-3.8,1.6-3.9,3.6v0.4c0.6,11-1.7,37.8-11.9,47c-12.5,11.2-48,9.7-48,9.7
       s-5.9,7.2,5.9,8.8s44.7,0.5,52.7-6.9c7.7-7.2,12.3-26.1,8.9-59c-0.2-1.9-1.7-3.3-3.6-3.4L291,164.6L291,164.6z"
        />
      </g>

      <g id="programmer">
        <radialGradient
          id="SVGID_1_"
          cx="247.77"
          cy="1008.6"
          r="12.9282"
          gradientTransform="matrix(1 0 0 1 0 -896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
          <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
        </radialGradient>
        <path
          fill="url(#SVGID_1_)"
          d="M260.1,113.2c-0.1,1.1-1.7,13-13.8,13c-12.8,0-10.6-12.7-10.6-12.7v-0.1c1.3-0.3,2.7-0.3,4-0.2v-6
		l14.5-8.1h0.5v14C256.4,112.9,258.3,113,260.1,113.2z"
        />

        <radialGradient
          id="SVGID_2_"
          cx="103.3967"
          cy="1149.0927"
          r="20.3602"
          gradientTransform="matrix(0.9776 -0.2105 0.2105 0.9776 -102.7081 -1012.3581)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
          <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
        </radialGradient>
        <path
          fill="url(#SVGID_2_)"
          d="M253,72.3c2.2,2.2,3.7,5,4.4,8.1c1.4,6.1,0.1,12.7-1.7,18.6c-0.3,1-0.7,2-1.3,2.9
		c-0.5,0.6-1,1.1-1.6,1.6l-7.7,6.8c-1.7,1.5-12.5,2.8-14.5,1.3c-7.9-5.7-9.4-22-7.8-30.4C225.3,67.3,243.2,62.3,253,72.3L253,72.3z"
        />
        <path
          fill="#F7B094"
          d="M248.6,90.1c0.1-1.3,1.5-2.8,2.9-1.9s1.1,3.3,0.5,4.6c-0.5,1-2,2.2-3.1,1.2c-0.9-0.8,0.5-1.7,0.5-2.5
		s-1.3-1.1-0.7-1.8"
        />
        <path
          fill="#F7B094"
          d="M248.9,96.3c2,0.3,3.8-0.8,4.5-2.7c0.4-1.4,0.6-2.8,0.6-4.3c0.5,1.5,0.6,3.2,0.4,4.7
		c-0.4,2.9-1.4,5.7-3.7,5.7S248.9,96.3,248.9,96.3z"
        />
        <path
          fill="#3D3D7A"
          d="M247.1,94.2l-0.2,0.1c-0.9,0.1-1.3-1-1.4-1.6c-0.2-1.6-0.3-3.2-0.3-4.8c0-0.4,0-0.9-0.1-1.3
		c-0.5-1.1-1.8-1.9-2.2-3.1c-0.5-1.4,0.9-2.8,0.3-4.3c-0.8-2.3-3.8-2.8-5.9-2.8c-3.2,0.1-6.4,0.5-9.5,1.1c-3.4,0.5-7.6,1-10.6-1.1
		c-3.6-2.6-5.1-9.2-2.4-12.9c1.6-2,4-3.1,6.6-3.1c2.6-0.1,4.7,1.5,7.1,2.2c1.9,0.6,3.7-1.2,5.4-1.5c2.2-0.4,3.1,2,5.1,2
		s3.7-1.4,5.6-1.7c3.6-0.7,3.4,3,5.9,4.3c1.5,0.8,3.5,0.3,5,1.1c1.2,0.6,1.3,1.7,1.6,2.8c0.1,1.1,0.3,2.2,0.6,3.2
		c0.4,0.8,1,1.5,1.7,2.1c0.6,0.8,1.1,1.6,1.4,2.6c0.7,2.1,0.9,4.4,0.7,6.6c-0.5,3.7-1.4,7.3-2.7,10.8c-0.8,2.3-1.1,4.6-2.3,6.7
		c-0.3,0.6-1.8,2.3-2.3,1c-0.1-0.3-0.1-0.6-0.1-0.9c0.2-2.3,2.3-17.3-3.3-15.5c-1.1,0.4-2,1.3-2.4,2.5c-0.5,1.3-0.6,2.7-0.5,4.1v0.6
		C247.4,93.8,247.3,94.1,247.1,94.2L247.1,94.2z"
        />
        <path
          fill="#F7B094"
          d="M239.6,111.8c6.4-1,10.7-6.1,10.7-6.1c-1.2,5.2-5.8,8.9-11.1,9L239.6,111.8L239.6,111.8z"
        />

        <radialGradient
          id="SVGID_3_"
          cx="220.22"
          cy="1203.775"
          r="8.126"
          gradientTransform="matrix(1 0 0 1 0 -896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
          <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
        </radialGradient>
        <polygon
          fill="url(#SVGID_3_)"
          points="224.6,300.1 228.8,309.8 215.9,315.4 211.6,305.8 	"
        />
        <path
          fill="#56548C"
          d="M285.5,193.2c-0.8,1.6-58.2,0-63.6,0.5c0,0-35.1,16.8-40.2,32.5c-0.5,2-0.7,4.1-0.5,6.2
		c1.4,22.1,26.6,75.1,26.6,75.1l3.9-1.7l12.9-5.6l1.8-0.8c0,0-20-59.5-16-62.7s49.3-11.2,65-15.4S285.5,193.2,285.5,193.2z"
        />

        <radialGradient
          id="SVGID_4_"
          cx="168.75"
          cy="1205.8"
          r="7.4066"
          gradientTransform="matrix(1 0 0 1 0 -896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
          <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
        </radialGradient>
        <polygon
          fill="url(#SVGID_4_)"
          points="175.3,302.6 176.3,317 162.2,317 161.2,302.6 	"
        />
        <path
          fill="#3D3D7A"
          d="M221.6,193.3l-0.5,0.2c0,0-58.8,8.3-68.4,24.8c-6.2,10.7,5.8,89.2,5.8,89.2h20.8c0,0-3.1-65.4-2.1-69
		c1.2-4.2,3.2-5.7,4-6.1c-0.2-2.1,0-4.2,0.5-6.2c5-15.7,40.2-32.5,40.2-32.5C221.8,193.6,221.6,193.4,221.6,193.3z"
        />
        <path
          fill="#F57F17"
          d="M278.3,138.8l-4,0.5c-0.7,7.1-1.8,14.3-3.3,21.3l-49.1,18.7l-0.7,3.6l-0.6-0.1c0,0.7,0,1.4,0.1,2.1
		c0.1,4.1,0.4,7.1,0.8,8.3c0,0.2,0.1,0.4,0.3,0.5c1.3,1.1,18.7-1,37.5,5.9c16.3,6,25.4,12.5,25.9,11.6
		C290.3,200.5,281,158.7,278.3,138.8L278.3,138.8z"
        />
        <path
          fill="#D26F18"
          d="M273.3,163.3c-1.3,6.3-4.7,18.8-11.3,20.5c-8.7,2.2-25.5,2.1-41.2,1.2c0-0.7,0-1.4-0.1-2.1l0.6,0.1l0.7-3.6
		l49.2-18.7c1.5-7,2.6-14.1,3.3-21.3v0.2C274.6,141.3,275.3,154,273.3,163.3L273.3,163.3z"
        />
        <path
          fill="#D26F18"
          d="M224,123.2c-0.9,1.6-2.1,18.7-2.8,35.7l-10.1-9.4C215.4,141.2,224,123.2,224,123.2L224,123.2z"
        />
        <g id="hand01">
          <path
            id="arm01"
            fill="#F7B094"
            d="M218,171.2c-8.5,1.5-16.3,2.7-16.3,2.7v0.4c-9.4-7.5-23.8-28.9-23.8-28.9s4.3-5.2,5.4-6.5
			c0.2-0.2,23.6,15.9,24.8,15.8c0.3,0,1.5-2.1,3.1-5.3l10.1,9.4c-0.2,4-0.3,8.1-0.4,11.9L218,171.2L218,171.2z"
          />
          <g id="palm01">
            <path
              fill="#F7B094"
              d="M169.4,142.7c0,0-1,1.9,0.8,2.8c2.2,0.9,4.6,1.3,6.9,1.3c1.5-0.1,2.7-2.3,2.7-2.3l-4.6-4.4h-3.7
				L169.4,142.7L169.4,142.7z"
            />
            <path
              fill="#F7B094"
              d="M183.1,138.8l0.2,0.2c-1.1,1.4-5.4,6.5-5.4,6.5l-2.7-1.9c-2,1.1-4.4,1-6.4-0.1c-3.6-1.9-1.4-6.6-1.2-7.1
				c-0.7,0.2-5,3.6-5.6,3.3s-1.2-1.6,3.6-6.3s11.3,1.3,11.4,1.3L183.1,138.8L183.1,138.8z"
            />
            <path
              fill="#E8987C"
              d="M169.1,143.7c0.3-0.9,2.9-0.4,4.5-0.4c1.2,0,1.9-0.3,2.2-1.2s-1.4-2.4-1.7-1.9s0.6,1.1,0.7,1.7
				s-1.7,0.8-3.1,0.8c-1.2,0-2.5,0.2-3.7,0.4L169.1,143.7L169.1,143.7z"
            />
          </g>
        </g>
        <g id="hand02">
          <radialGradient
            id="arm02_1_"
            cx="213.82"
            cy="1066.92"
            r="41.44"
            gradientTransform="matrix(1 0 0 1 0 -896)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
            <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
          </radialGradient>
          <path
            id="arm02"
            fill="url(#arm02_1_)"
            d="M268.7,169.8l-25-8.9c-1.8,3.4-3.8,6-5.7,6.5c-2.9,0.8-10,2.1-17.1,3.3l-2.8,0.5
			c-8.5,1.5-16.3,2.7-16.3,2.7v0.7l-0.2,6.3v1.6c6.4-0.2,12.8-0.1,19.2,0.3c15,1.1,34.3,1.7,40.8-1.3c3-1.4,5.4-6.1,7.3-11.8
			L268.7,169.8L268.7,169.8z"
          />

          <radialGradient
            id="palm02_1_"
            cx="213.82"
            cy="1066.92"
            r="41.44"
            gradientTransform="matrix(1 0 0 1 0 -896)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: '#FFC8AF' }} />
            <stop offset="1" style={{ stopColor: '#FFBB9C' }} />
          </radialGradient>
          <path
            id="palm02"
            fill="url(#palm02_1_)"
            d="M201.7,174l-0.2,7H176c0,0,2.5-10,9.4-10s9.6,3.7,9.6,3.7L201.7,174z"
          />
        </g>
        <polygon
          fill="#F7B094"
          points="243.6,160.9 268.7,169.8 267.5,173.1 242.8,162.5 	"
        />
        <path
          fill="#F57F17"
          d="M243.6,160.9c-1.8,3.4-3.8,6-5.7,6.5c-2.9,0.8-10,2.1-17.1,3.3c0.1-3.8,0.2-7.9,0.4-11.9
		c0.7-17,1.9-34.1,2.8-35.7c1.4-2.7,5.4-8.5,11.6-9.8v0.1c0,0-2.1,12.7,10.6,12.7c12.2,0,13.7-11.8,13.8-13
		c6.3,0.7,15.9,3.8,17.2,16.4c0.3,2.5,0.7,5.7,1.1,9.3l-3.9,0.5c0,0-1.6,17.7-5.7,30.3h-0.1L243.6,160.9L243.6,160.9z"
        />
        <polygon fill="#D26F18" points="243.4,159.6 253.4,135.4 246,160.6 	" />
        <path
          fill="#F57F17"
          d="M260.1,113.2h-5.4c0,0-7.8,8.5-12.7,8.5s-2.3-8.5-2.3-8.5h-2.4c-7,0-12.9,5.2-13.7,12.2
		c-0.1,0.8-0.2,1.6-0.2,2.2c-0.5,5.2,20.3,8.9,20.3,8.9l10.7-0.6l6.5-12.7l1.3-5.2L260.1,113.2L260.1,113.2z"
        />
        <path
          fill="#F1F2F2"
          d="M194.3,326.5c0.5,2.6,2.3,4.5,4.9,4l34.7-6.5c0.9-0.2,1.4-1,1.3-1.9l-0.6-3.1
		C234.6,319,198.2,325.4,194.3,326.5L194.3,326.5z"
        />
        <path
          fill="#3D3D7A"
          d="M204.7,317.8l1.1-0.9l3-2.7l1.8-1.6l1.1-1l1.4-1.3c0.3-0.2,0.7-0.2,1,0c1.4,1.2,6,4,14.4-1.2
		c0.4-0.2,0.9-0.1,1.1,0.2v0.1l5.1,9.7c0,0-36.5,6.4-40.3,7.5C195.6,325.7,200.2,321.6,204.7,317.8L204.7,317.8z"
        />
        <path
          fill="#F1F2F2"
          d="M139.7,326.1c0.1,2.6,1.6,4.8,4.2,4.7l35.3-0.9c0.9,0,1.6-0.8,1.6-1.6l-0.1-3.1
		C180.7,325.2,143.7,325.7,139.7,326.1z"
        />
        <path
          fill="#3D3D7A"
          d="M151.3,319.2l1.2-0.8l2.3-1.5l1.1-0.7l2-1.3l1.2-0.8l1.6-1c0.3-0.2,0.7-0.1,1,0.1c1.2,1.4,5.3,4.9,14.4,1.1
		c0.4-0.2,0.9,0,1.1,0.4l3.4,10.4c0,0-37,0.5-41,0.9C141,325.5,146.3,322.3,151.3,319.2L151.3,319.2z"
        />
        <polyline fill="none" points="98.6,177.1 98.9,177.1 166.2,177.1 	" />
        <polygon
          fill="#E8987C"
          points="211.1,149.5 210.4,150.9 221.2,162.1 221.2,158.8 	"
        />
      </g>
      <g id="laptop">
        <polygon
          fill="#ABB5BA"
          points="114.6,182.6 95.7,132.3 149.4,132.3 168.2,182.6 	"
        />
        <polygon
          fill="#8495A0"
          points="171.6,182.6 168.2,182.6 149.4,132.3 152.4,132.4 169.8,177.9 	"
        />
        <path fill="#8495A0" d="M170.5,182.6H206l-0.1-3.2h-36.1" />
        <polygon
          fill="#8495A0"
          points="104.7,137.6 105.6,140 116.3,140 115.4,137.6 	"
        />
      </g>
      <g id="table">
        <rect x="313" y="192.2" fill="#8495A0" width="8.5" height="140.2" />
        <rect x="266.7" y="192.2" fill="#ABB5BA" width="8.5" height="140.2" />
        <rect x="118.3" y="192.2" fill="#8495A0" width="8.5" height="140.2" />
        <rect x="71.9" y="192.2" fill="#ABB5BA" width="8.5" height="140.2" />
        <path
          fill="#141B56"
          d="M63.7,182.6h266.4c2.3,0,4.1,1.9,4.1,4.1v1.8c0,2.3-1.9,4.1-4.1,4.1H63.7c-2.3,0-4.2-1.9-4.2-4.1v-1.8
       C59.6,184.4,61.4,182.6,63.7,182.6L63.7,182.6z"
        />
      </g>
      <g id="vase">
        <g id="leaves">
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="296.5779"
            y1="325.1491"
            x2="257.2379"
            y2="275.5591"
            gradientTransform="matrix(0.45 -0.89 -0.89 -0.45 461.05 636.68)"
          >
            <stop offset="0" style={{ stopColor: '#606BF1' }} />
            <stop offset="1" style={{ stopColor: '#58479F' }} />
          </linearGradient>
          <path
            fill="url(#SVGID_7_)"
            d="M328.6,255.1c2,8.3,8.4,20.9-0.6,27.6c-2.4,1.8-5.9,1.1-8.5-0.3c-3.3-1.8-6.6-7.5-8.1-10.9
           c-1.2-2.7-1.7-6.1-2.7-9c-1-3.1-2.1-6.1-3.2-9.2c-3.7-11.1-2.3-22.5,4.6-32.1c2.3,3.1,5.3,5.3,8.3,7.9c1.4,1.2,2.7,2.5,3.9,3.9
           c2.1,2.4,2.5,5.7,3,8.7C326.2,246.2,327.5,250.6,328.6,255.1L328.6,255.1z"
          />
          <path
            fill="#747DED"
            d="M326.4,283.7c-0.2-0.7-0.4-1.3-0.6-2c1.2-0.7,2.1-1.7,2.9-2.8c1.2-1.7,2.2-3.6,2.9-5.7
           c0-0.1-0.1-0.2-0.2-0.1c-0.8,1.8-1.8,3.5-3,5c-0.8,1.1-1.7,2-2.8,2.8c-0.2-0.8-0.5-1.6-0.7-2.4c1.1-0.9,2-2,2.7-3.2
           c1.2-1.9,2.3-4,3.2-6c-1.6,2.9-3.1,6.7-6,8.7c-0.3-1-0.5-2-0.8-3.1v-0.2c3.1-2.6,4.3-6.5,5.9-10c0-0.1,0-0.1-0.1,0
           c-1.7,3.3-3.1,6.9-6,9.5c-0.3-1.5-0.7-2.9-1-4.4c2.6-2.6,4.5-5.9,5.4-9.5v-0.1c0,0-0.1,0-0.1,0.1c-1.2,3.3-3.1,6.3-5.4,8.9
           c-0.3-1.5-0.6-2.9-1-4.4c1.2-1.2,2.3-2.6,3.2-4c0.9-1.5,1.5-3.1,1.7-4.8c0,0,0-0.1-0.1-0.1s-0.1,0-0.1,0.1
           c-0.6,3.4-2.9,5.5-4.9,8.1c-0.3-1.4-0.6-2.7-1-4c2.2-3,4.7-6,4.9-9.8c0,0-0.1-0.1-0.1,0c-0.4,3.7-3,6.3-5,9.2
           c-0.1-0.2-0.1-0.5-0.2-0.7c-0.4-1.2-0.7-2.5-1.1-3.7c1.4-1.5,2.6-3.1,3.6-4.9c0.9-1.1,1.5-2.5,1.8-3.9c0-0.1-0.1-0.1-0.1,0
           c-0.5,3-3.4,5.9-5.4,8.2c-0.4-1.2-0.8-2.5-1.1-3.7c2-3,4.9-5.5,5.2-9.4c0-0.1-0.2-0.1-0.2,0c-0.5,3.6-3.3,6-5.2,8.9
           c-0.2-0.8-0.5-1.5-0.7-2.3c2.5-2.5,4.9-6.7,5.2-10.3c0-0.1-0.1-0.1-0.2-0.1s-0.1,0.1-0.1,0.1c-0.7,3.7-2.5,7-5.1,9.7
           c-0.4-1.3-0.7-2.5-1-3.8v-0.1c1.1-1.2,2.1-2.5,2.9-3.9c1.1-1.5,1.8-3.2,2.1-5.1c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2
           c-0.2,3-2.7,6.2-4.9,8.3c-0.1-0.5-0.2-0.9-0.4-1.4c-0.2-0.7-0.3-1.4-0.5-2.1c0.7-1.3,2-2.3,2.7-3.6c0.6-1.1,1.1-2.3,1.5-3.6
           c0-0.1,0-0.1-0.1-0.1h-0.1c-0.6,1.6-1.3,3.1-2.3,4.4c-0.6,0.8-1.3,1.4-1.8,2.2c-0.3-1.1-0.5-2.3-0.8-3.4c0.1,0,0.1-0.1,0.1-0.1
           c1.3-1.1,1.9-2.9,2.3-4.4 M316.1,230.9c-0.5,1.5-1.4,3-2.5,4.1h-0.1c-0.2-0.9-0.5-1.8-0.7-2.8c0.1-0.1,0.1-0.2,0.1-0.3
           c0.5-0.9,1-1.9,1.3-2.9v-0.1h-0.1c-0.4,0.9-0.9,1.7-1.5,2.5c-0.5-1.9-1.1-3.7-1.9-5.6c-0.1-0.2-0.3-0.1-0.3,0.1
           c0.6,1.8,1.2,3.6,1.7,5.4c-1.4-0.6-2.6-1.4-3.8-2.4c-0.1,0-0.1,0-0.1,0.1c0.6,0.6,1.3,1.2,2.1,1.6c0.6,0.5,1.3,0.9,2,1.3
           c0.3,1,0.5,2,0.7,3c-2.5,1-5.3-0.1-6.5-2.4c-0.1-0.2-0.4,0-0.3,0.1c0.7,1.2,1.7,2.1,3,2.6c1.2,0.5,2.6,0.5,3.8,0.1
           c0.3,1.1,0.5,2.3,0.8,3.4c-1.2-0.2-2.3-0.4-3.4-0.7c-1.7-0.6-3.3-1.2-4.9-2c-0.1,0-0.2,0-0.2,0.1s0,0.2,0.1,0.2
           c1.5,0.8,3,1.4,4.6,2c1.3,0.4,2.6,0.7,3.9,0.9v0.2v0.1c0,0.1,0,0.2,0.1,0.2c0.2,1.1,0.5,2.2,0.7,3.3v0.2c-2.8,0-7.1-0.2-8.7-2.8
           c-0.1-0.2-0.5,0-0.3,0.3c2.1,2.7,6.1,2.5,9.2,3.1c0.3,1.2,0.6,2.5,1,3.7c-1.7,0.2-3.5,0.2-5.2-0.2c-1.6-0.4-3.7-0.7-4.9-1.9
           c0,0-0.1,0,0,0.1c1.1,1.2,3,1.5,4.5,1.9c1.8,0.7,3.8,0.9,5.7,0.7c0,0.1,0,0.1,0.1,0.1c0.2,0.8,0.4,1.6,0.7,2.3
           c-2.9,1.1-7.9,0.8-10.3-0.7c1.7,1,3.7,1.6,5.7,1.5c1.6,0.2,3.2,0,4.7-0.4c0.4,1.4,0.8,2.9,1.3,4.3c-1.4,0.1-2.8,0.5-4.3,0.6
           c-2.1,0-4.2-0.7-6-1.9c-0.1-0.1-0.2,0.1-0.1,0.2c3.4,2.2,6.6,1.8,10.5,1.4c0.4,1.2,0.7,2.3,1,3.5c-2.9,0.7-7.2,0.7-9.6-1
           c-0.2-0.1-0.4,0.1-0.2,0.3c1.6,1,3.5,1.5,5.4,1.4c1.4,0,3.3,0.3,4.6-0.3v0.1c0.5,1.7,0.9,3.4,1.3,5.1c-3.4,0.6-6.3-0.7-9.5-1.8
           c-0.2-0.1-0.4,0.3-0.1,0.3c3.3,1.1,6.3,2.5,9.8,1.9l0.9,4.2c-3,0.4-6.1-0.1-8.9-1.5c-0.2-0.1-0.3,0.2-0.1,0.3c2.8,1.4,6,2,9.1,1.7
           l0.9,4.5c-2.8,0.7-5.7,0.2-8.2-1.2c-0.1,0-0.1,0.1-0.1,0.1c2.4,1.3,5.6,2.6,8.4,1.6l0.3,1.5c0.1,0.3,0.1,0.6,0.2,0.9
           c-2.2,0.4-4.5,0.4-6.7-0.1c-0.1,0-0.1,0.1,0,0.1c2.2,0.6,4.5,0.8,6.8,0.4c0.2,0.9,0.3,1.9,0.5,2.8c-0.6,0-1.2,0-1.8,0.1
           c-1.1,0-2.1-0.1-3.2-0.3c-0.1,0-0.1,0.1,0,0.1c0.9,0.3,1.9,0.4,2.8,0.5c0.8-0.1,1.5,0,2.2,0c0.7,3.8,1.5,7.8,3.5,10.8
           c0.4,0.7,1.7,0.3,1.5-0.5c-0.7-2.6-1.6-5.1-2.6-7.6L316.1,230.9L316.1,230.9z"
          />

          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="292.1088"
            y1="158.2424"
            x2="252.7688"
            y2="108.6424"
            gradientTransform="matrix(0.78 -0.62 -0.62 -0.78 224.28 524.17)"
          >
            <stop offset="0" style={{ stopColor: '#606BF1' }} />
            <stop offset="1" style={{ stopColor: '#58479F' }} />
          </linearGradient>
          <path
            fill="url(#SVGID_8_)"
            d="M363.4,257.4c-1.7,8.3-1.2,22.5-12.2,24.8c-3,0.6-5.8-1.5-7.6-3.8c-2.3-3.1-2.8-9.6-2.8-13.4
           c0-3,1-6.3,1.4-9.2c0.4-3.2,0.6-6.4,1-9.7c1.4-11.6,7.4-21.3,17.7-27.1c0.8,3.8,2.6,7,4.2,10.7c0.7,1.7,1.4,3.4,1.9,5.2
           c0.8,3.1-0.2,6.2-0.9,9.2C365,248.4,364.4,253,363.4,257.4z"
          />
          <path
            fill="#747DED"
            d="M349.4,282.5l0.3-2.1c1.3-0.1,2.6-0.6,3.8-1.3c1.9-1,3.6-2.4,5-3.9c0.1-0.1,0-0.2-0.1-0.1
           c-1.5,1.3-3.1,2.4-4.8,3.3c-1.2,0.6-2.4,1.1-3.7,1.4c0.1-0.8,0.2-1.7,0.4-2.5c1.4-0.3,2.7-0.9,3.8-1.8c1.9-1.2,3.7-2.6,5.4-4.1
           c-2.7,2-5.7,4.7-9.1,5.4c0.2-1,0.4-2.1,0.6-3.1v-0.2c3.9-1,6.6-4.1,9.6-6.6c0,0,0-0.1-0.1-0.1c-3,2.3-5.8,4.9-9.4,6.1
           c0.3-1.5,0.6-3,1-4.4c3.5-1.3,6.5-3.5,8.9-6.3v-0.1h-0.1c-2.5,2.5-5.4,4.4-8.7,5.8c0.3-1.5,0.7-2.9,1-4.4c1.6-0.6,3.1-1.4,4.6-2.2
           c1.4-1,2.6-2.2,3.6-3.6c0-0.1-0.1-0.1-0.1-0.1c-2,2.9-5,3.8-7.9,5.3c0.3-1.4,0.5-2.7,0.8-4.1c3.2-1.8,6.8-3.4,8.6-6.9l0,0
           c-1.9,3.1-5.3,4.5-8.4,6.2l0.1-0.7c0.2-1.3,0.4-2.5,0.6-3.8c1.9-0.8,3.6-1.8,5.3-2.9c1.3-0.7,2.4-1.6,3.2-2.8
           c0-0.1-0.1-0.1-0.1-0.1c-1.7,2.5-5.5,3.9-8.3,5.2l0.5-3.9c3.1-1.9,6.8-2.9,8.7-6.3c0,0,0-0.1-0.1-0.1h-0.1c-2,3.1-5.5,4.1-8.5,5.8
           c0.1-0.8,0.2-1.6,0.4-2.4c3.4-1.2,7.3-4.1,9-7.1c0-0.1,0-0.2-0.1-0.2h-0.2c-2.2,3-5.2,5.3-8.7,6.6l0.6-3.9v-0.1
           c1.5-0.6,3-1.4,4.3-2.3c1.6-0.9,3-2.2,4-3.7c0.1-0.2-0.2-0.3-0.3-0.2c-1.5,2.7-5,4.4-8,5.5l0.3-1.4l0.4-2.1
           c1.2-0.8,2.7-1.2,3.9-2.1c1-0.8,2-1.7,2.9-2.6v-0.1h-0.1c-1.2,1.2-2.5,2.2-4,3c-0.8,0.4-1.8,0.7-2.6,1.2c0.2-1.1,0.5-2.3,0.7-3.4
           h0.1c0.1,0,0.1,0,0.2-0.1c1.6-0.4,2.9-1.8,4-3c-1.1,1.2-2.5,2.1-4,2.7h-0.1c0.2-0.9,0.4-1.9,0.5-2.8c0.1,0,0.2-0.1,0.2-0.2
           c0.9-0.6,1.7-1.3,2.4-2v-0.1h-0.1c-0.7,0.6-1.5,1.2-2.4,1.7c0.3-1.9,0.5-3.9,0.6-5.8c0-0.1-0.1-0.1-0.1-0.1
           c-0.1,0-0.1,0.1-0.1,0.1c-0.2,1.9-0.5,3.8-0.8,5.6c-1-1.1-1.8-2.4-2.5-3.8c0-0.1-0.1,0-0.1,0c0.3,0.8,0.7,1.6,1.2,2.3
           c0.4,0.7,0.8,1.4,1.3,2l-0.6,3c-1.1-0.1-2.1-0.5-3-1.2c-1.2-1-1.9-2.4-2-3.9c0-0.2-0.3-0.2-0.3,0c0.1,1.4,0.7,2.7,1.6,3.7
           c0.9,0.9,2.1,1.5,3.5,1.7c-0.2,1.1-0.5,2.3-0.7,3.4c-1-0.6-1.9-1.3-2.8-2.1c-1.3-1.2-2.5-2.5-3.6-3.9c-0.1-0.1-0.3,0.1-0.2,0.2
           c1,1.3,2.1,2.6,3.3,3.7c1,0.9,2,1.7,3.2,2.4v0.2c-0.1,0.1-0.1,0.2,0,0.3c-0.2,1.1-0.5,2.2-0.7,3.3v0.2c-2.6-1.2-6.4-3.2-6.7-6.2
           c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2c0.8,3.4,4.5,4.9,7,6.7c-0.3,1.3-0.5,2.5-0.7,3.8c-1.7-0.5-3.2-1.3-4.6-2.4
           c-1.3-1-3-2.2-3.6-3.8h-0.1c0.5,1.5,2.1,2.6,3.3,3.7c1.4,1.4,3.1,2.4,4.9,3v0.2c-0.1,0.8-0.3,1.6-0.4,2.4c-3.1-0.2-7.5-2.6-9-5
           c1.1,1.7,2.7,3,4.6,3.8c1.4,0.8,2.9,1.3,4.4,1.6c-0.2,1.5-0.4,3-0.7,4.4c-1.4-0.5-2.8-0.8-4.1-1.3c-1.9-0.8-3.6-2.2-4.7-4
           c-0.1-0.1-0.3,0-0.2,0.1c2.2,3.4,5.3,4.4,8.9,5.7l-0.6,3.6c-3-0.6-6.8-2.4-8.3-5c-0.1-0.2-0.4,0-0.3,0.1c0.9,1.6,2.4,3,4,3.8
           c1.2,0.6,2.9,1.6,4.3,1.7v0.1c-0.3,1.7-0.6,3.5-1,5.2c-3.3-0.8-5.5-3.3-7.9-5.6c-0.2-0.2-0.4,0.1-0.3,0.3c2.5,2.4,4.6,5,8,5.9
           c-0.3,1.4-0.6,2.8-1,4.2c-2.9-0.9-5.5-2.7-7.5-5.1c-0.1-0.2-0.4,0.1-0.2,0.2c1.9,2.5,4.6,4.4,7.6,5.4c-0.4,1.5-0.8,3-1.1,4.5
           c-2.8-0.6-5.3-2.2-6.9-4.6c0,0-0.1,0-0.1,0.1c1.6,2.2,4,4.8,6.9,5l-0.4,1.4c-0.1,0.3-0.2,0.6-0.2,0.9c-2.2-0.5-4.2-1.5-6-2.9
           c0,0-0.1,0-0.1,0.1c1.7,1.5,3.8,2.6,6,3.3c-0.3,0.9-0.5,1.8-0.8,2.8c-0.5-0.3-1.1-0.5-1.7-0.7c-1-0.4-1.9-0.9-2.7-1.6
           c-0.1-0.1-0.2,0.1-0.1,0.1c0.7,0.6,1.5,1.2,2.4,1.6c0.7,0.3,1.4,0.6,2,0.9c-1,3.7-1.9,7.7-1.4,11.2c0.1,0.8,1.4,1,1.6,0.2
           C348.9,287.8,349.2,285.2,349.4,282.5L349.4,282.5z"
          />

          <linearGradient
            id="SVGID_9_"
            gradientUnits="userSpaceOnUse"
            x1="295.725"
            y1="261.9624"
            x2="247.0347"
            y2="200.5667"
            gradientTransform="matrix(0.6072 -0.7945 -0.7945 -0.6072 353.4952 599.373)"
          >
            <stop offset="0" style={{ stopColor: '#606BF1' }} />
            <stop offset="1" style={{ stopColor: '#58479F' }} />
          </linearGradient>
          <path
            fill="url(#SVGID_9_)"
            d="M347.7,248.6c0.5,10.5,5.4,27.4-7.1,33.4c-3.4,1.6-7.4,0-10.2-2.3c-3.6-3-6.3-10.7-7.4-15.2
           c-0.9-3.6-0.6-7.8-1.2-11.5c-0.6-4-1.2-7.9-1.7-11.9c-1.9-14.3,2.4-27.9,13-37.9c2.1,4.3,5.3,7.6,8.3,11.6
           c1.4,1.8,2.7,3.7,3.8,5.6c2,3.5,1.7,7.5,1.7,11.3C346.8,237.4,347.4,243.1,347.7,248.6L347.7,248.6z"
          />
          <path
            fill="#747DED"
            d="M338.4,283c-0.1-0.9-0.2-1.7-0.3-2.6c1.6-0.6,3-1.5,4.1-2.7c1.9-1.8,3.5-3.9,4.8-6.2
           c0.1-0.1-0.1-0.2-0.2-0.1c-1.4,2-3,3.9-4.8,5.5c-1.2,1.1-2.5,2-4,2.8c-0.1-1-0.2-2.1-0.3-3.1c1.6-0.6,2.8-2.1,4-3.3
           c1.9-2.1,3.7-4.3,5.3-6.6c-2.6,3.2-5.4,7.4-9.3,9.2c-0.1-1.3-0.2-2.6-0.2-3.9v-0.2c4.4-2.4,6.7-6.9,9.5-10.8c0-0.1,0-0.1-0.1-0.1
           c-2.9,3.7-5.4,7.7-9.5,10.1c-0.1-1.9-0.1-3.7-0.2-5.6c3.8-2.6,6.8-6.1,8.8-10.3V255h-0.1c-2.3,4-5.2,6.7-8.7,9.5
           c0-1.9-0.1-3.7-0.2-5.5c1.6-1.4,3.4-2.4,4.8-4s2.5-3.4,3.2-5.4c0,0,0-0.1-0.1-0.1h-0.1c-1.5,4.1-4.9,6-7.9,8.7l-0.3-5.1
           c3.3-3.1,7.1-6.2,8.2-10.8c0,0-0.1-0.1-0.1,0c-1.4,4.4-5,7-8.2,10c0-0.3,0-0.6-0.1-0.9c-0.1-1.6-0.3-3.2-0.5-4.8
           c2-1.5,3.8-3.2,5.5-5.1c1.3-1.2,2.3-2.7,3-4.3c0-0.1-0.1-0.2-0.2-0.1c-1.3,3.5-5.5,6.4-8.4,8.7c-0.2-1.6-0.4-3.2-0.5-4.8
           c3.2-3.2,7.3-5.6,8.5-10.2c0-0.1,0-0.1-0.1-0.1s-0.1,0-0.1,0.1c-1.4,4.3-5.4,6.5-8.4,9.6l-0.3-3c3.7-2.5,7.5-7.1,8.7-11.3
           c0-0.1-0.1-0.2-0.2-0.2s-0.1,0-0.2,0.1c-1.7,4.2-4.7,7.9-8.4,10.4c-0.1-1.6-0.3-3.2-0.4-4.8v-0.1c1.7-1.2,3.2-2.5,4.5-4.1
           c1.7-1.6,3-3.5,3.7-5.7c0.1-0.3-0.3-0.4-0.4-0.1c-1,3.7-4.7,6.9-7.9,9c0-0.6-0.1-1.2-0.1-1.8c0-0.9-0.1-1.8-0.1-2.6
           c1.2-1.4,2.9-2.3,4.1-3.7c1-1.3,1.9-2.6,2.6-4v-0.2h-0.2c-1,1.8-2.3,3.4-3.8,4.8c-0.9,0.8-1.9,1.4-2.7,2.2L334,221h0.1
           c0.1,0,0.2-0.1,0.2-0.1c1.8-1,2.9-3.1,3.9-4.8c0,0,0-0.1-0.1,0c-1,1.8-2.4,3.3-4,4.5H334c-0.1-1.2-0.1-2.3-0.2-3.5
           c0.1-0.1,0.2-0.2,0.2-0.3c0.8-1,1.6-2.1,2.3-3.2c0,0,0-0.1-0.1-0.1h-0.1c-0.7,1-1.5,1.9-2.4,2.8c-0.2-2.4-0.5-4.8-1-7.2
           c0-0.1-0.1-0.2-0.2-0.1c-0.1,0-0.2,0.1-0.1,0.2c0.4,2.3,0.6,4.6,0.8,7c-1.5-1.1-2.9-2.3-4.1-3.8c0-0.1-0.2,0-0.1,0.1
           c0.6,0.9,1.3,1.7,2.1,2.4l2.1,2.1c0.1,1.3,0.1,2.5,0.2,3.8c-1.4,0.2-2.7,0.1-4-0.5c-1.6-0.8-2.8-2.2-3.4-3.9
           c-0.1-0.2-0.4-0.1-0.3,0.1c0.5,1.6,1.6,3,3,3.9c1.4,0.8,3,1.2,4.6,1c0.1,1.4,0.1,2.9,0.1,4.4c-1.4-0.5-2.7-1-4-1.7
           c-2.1-0.9-3.5-2.4-5.4-3.5c-0.1-0.1-0.2,0-0.2,0c-0.1,0.1,0,0.2,0,0.2c1.8,1.1,3.2,2.5,5.1,3.5c1.4,0.8,3,1.5,4.5,1.9v0.2
           c-0.1,0.1-0.1,0.2,0,0.3c0,1.4,0.1,2.8,0.1,4.2v0.3c-3.4-0.6-8.6-1.9-9.9-5.4c0-0.1-0.2-0.2-0.3-0.2s-0.2,0.2-0.2,0.3v0.1
           c1.9,3.8,6.8,4.5,10.4,5.9c0.1,1.6,0.2,3.1,0.3,4.7c-2.2-0.1-4.3-0.6-6.3-1.4c-1.8-0.8-4.3-1.7-5.5-3.4c0-0.1-0.1,0-0.1,0.1
           c1.1,1.7,3.4,2.5,5.1,3.4c2.1,1.2,4.4,2,6.8,2.1v0.2l0.3,3c-3.8,0.7-9.7-0.9-12.4-3.2c1.9,1.7,4.2,2.8,6.6,3.1
           c1.9,0.6,3.8,0.8,5.8,0.6c0.2,1.8,0.4,3.7,0.5,5.5c-1.8-0.2-3.6-0.1-5.3-0.3c-2.6-0.4-4.9-1.6-6.8-3.4c-0.1-0.1-0.3,0.1-0.2,0.2
           c3.6,3.5,7.6,3.7,12.4,4.2c0.1,1.5,0.3,3,0.4,4.5c-3.7,0.2-8.9-0.8-11.5-3.4c-0.2-0.2-0.5,0.1-0.3,0.3c1.7,1.6,3.9,2.6,6.2,3
           c1.6,0.4,3.9,1.1,5.7,0.8v0.1c0.2,2.2,0.3,4.4,0.4,6.5c-4.2,0-7.5-2.3-11.1-4.3c-0.3-0.1-0.5,0.2-0.2,0.4c3.7,2.2,7,4.6,11.4,4.6
           c0.1,1.8,0.1,3.5,0.1,5.3c-3.8-0.2-7.5-1.6-10.5-3.9c-0.2-0.1-0.4,0.2-0.2,0.3c3.1,2.4,6.8,3.9,10.7,4.2v5.7
           c-3.6,0.4-6.9-1.2-9.7-3.4c-0.1,0-0.2,0.1-0.1,0.1c2.6,2.2,6.2,4.5,9.8,4v1.8v1.1c-2.8-0.1-5.5-0.7-8.1-1.8v0.1
           c2.5,1.3,5.3,2,8.1,2.1c0,1.1,0,2.3-0.1,3.5c-0.7-0.2-1.5-0.3-2.2-0.3c-1.3-0.2-2.6-0.5-3.8-1.1c-0.1,0-0.2,0.1-0.1,0.2
           c1.1,0.5,2.2,0.9,3.3,1.2c0.9,0.1,1.8,0.3,2.7,0.5c-0.1,4.8,0.1,9.8,1.7,13.9c0.4,0.9,2,0.8,2-0.3
           C339.7,289.5,338.8,286.2,338.4,283L338.4,283z"
          />
        </g>
        <polygon
          fill="#95A8B5"
          points="354.6,286.9 354.1,295.4 353.4,308.7 352.2,330.6 322.6,330.6 321.4,308.7 320.7,295.4 320.2,286.9"
        />
        <polygon
          fill="#A5B7C6"
          points="354.1,295.4 354,297.1 353.9,298.9 353.4,308.7 321.4,308.7 320.9,298.9 320.8,297.1 320.7,295.4"
        />
        <polygon
          fill="#95A8B5"
          points="354,297.1 353.9,298.9 320.9,298.9 320.8,297.1 	"
        />
      </g>
      <rect id="base" y="330.6" fill="#A5B7C6" width="431.9" height="9.9" />
    </svg>
  );
}

export default Programmer;
