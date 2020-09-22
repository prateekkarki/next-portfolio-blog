/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useRef, useEffect } from 'react';

import anime from 'animejs';

import devCss from './devOnSofa.css';

function DevOnSofa() {
	const svgRef = useRef(null);

	useEffect(() => {
		const leaves = svgRef.current.querySelectorAll('#leaves');
		// const guywithlaptop = svgRef.current.querySelectorAll('#guywithlaptop');

		anime({
			targets: [leaves],
			skewX: [-2, 2],
			easing: 'easeInOutQuad',
			duration: 1200,
			direction: 'alternate',
			loop: true,
		});

		// anime({
		// 	targets: [guywithlaptop],
		// 	translateX: ['225%', 0],
		// 	easing: 'easeInOutQuad',
		// 	duration: 800,
		// 	delay: 250,
		// });
	});

	return (
		<svg
			ref={svgRef}
			css={devCss}
			version="1.1"
			id="devSofa"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 3200 2000"
			enableBackground="new 0 0 3200 2000"
			xmlSpace="preserve"
		>
			<g id="leaves">
				<g>
					<path
						fill="#C8DBF4"
						d="M2244.4,1197.2c0,0-36.3-99.9,42.5-125c0,0,54.5-10.2,89.8,5.6c0,0-83.6,66.7-70.3,81.4
			c13.4,14.8,87.8-81,87.8-81s104.6,28.2,131.2,56.1c0,0-112.9,38.1-96.3,49.2c16.6,11,135.9-23.2,135.9-23.2s87.9,51.4,61.4,106.8
			c-26.6,55.4-65.6,60.9-79.3,54.1s-84.9-70-91.1-59s29.6,67.9,64,82.9c0,0-93.7,48.1-129.8,10.5s-27.3-72.5-50-95.4
			c-22.7-22.9-46.2-31.7-39.6-14.6c6.5,17,51.5,48.2,56.8,81.8c5.2,33.7,12.3,57.7-30.7,33.7c-43-24-104.5-85.2-93.3-124.6
			C2244.4,1197.2,2244.4,1197.2,2244.4,1197.2z"
					/>
					<g>
						<path
							fill="#C8DBF4"
							d="M2579.7,1251.3c0,0-251.5-105.9-335.3-54.1c0,0-26.5,32.6-77.7,52.2l-12.1,14c0,0,61.8-30,78.7-26.8
				C2233.3,1236.6,2242.6,1136.8,2579.7,1251.3z"
						/>
						<path
							fill="#C8DBF4"
							d="M2166.7,1249.4c0,0-70,19.9-101.1,90.8l9.6,4.6c0,0,45.7-68.3,88.3-85.6
				C2206.2,1241.9,2166.7,1249.4,2166.7,1249.4z"
						/>
					</g>
				</g>
				<g>
					<path
						fill="#C8DBF4"
						d="M2056.2,1146c0,0,91.8-51.4,48.9-121.1c0,0-34.3-42.8-71-53.8c0,0,19.6,104,0,106.4
			c-19.6,2.4-13.5-117.5-13.5-117.5s-96.7-46.5-134.6-42.8c0,0,60,101.6,40.4,99.1c-19.6-2.4-86.9-105.2-86.9-105.2
			s-99.1-18.4-115,40.4c-15.9,58.7,9.8,88.1,24.5,91.8c14.7,3.7,108.9,2.4,106.4,14.7s-66.1,31.8-101.6,20.8
			c0,0,39.2,96.7,90.5,91.8c51.4-4.9,67.3-36.7,99.1-39.2c31.8-2.4,55.1,6.1,39.2,14.7c-15.9,8.6-69.7,2.8-95.4,24.7
			s-46.5,35.3,1.2,45.1c47.7,9.8,133.4,3.7,150.5-33C2056.2,1146,2056.2,1146,2056.2,1146z"
					/>
					<g>
						<path
							fill="#C8DBF4"
							d="M1769.8,969.8c0,0,256.9,83.2,286.3,176.2c0,0-1.2,41.6,24.5,89.3v18.4c0,0-26.9-62.4-41.6-71
				C2039,1182.7,2096.5,1102,1769.8,969.8z"
						/>
						<path
							fill="#C8DBF4"
							d="M2080.6,1235.4c0,0,39.6,60.2,17,133.4l-10.2-2.7c0,0,9.9-80.7-10.8-121.3S2080.6,1235.4,2080.6,1235.4z"
						/>
					</g>
				</g>
				<g>
					<path
						fill="#D4E4F8"
						d="M2162.4,1014.8c0,0-133.8-74.9-71.4-176.6c0,0,49.9-62.4,103.5-78.5c0,0-28.5,151.6,0,155.2
			c28.5,3.6,19.6-171.2,19.6-171.2s140.9-67.8,196.2-62.4c0,0-87.4,148.1-58.9,144.5c28.5-3.6,126.6-153.4,126.6-153.4
			s144.5-26.8,167.7,58.9s-14.3,128.4-35.7,133.8c-21.4,5.4-158.8,3.6-155.2,21.4s96.3,46.4,148.1,30.3c0,0-57.1,140.9-132,133.8
			c-74.9-7.1-98.1-53.5-144.5-57.1c-46.4-3.6-80.3,8.9-57.1,21.4c23.2,12.5,101.7,4.1,139.1,35.9c37.5,31.8,67.8,51.5-1.8,65.7
			s-194.4,5.4-219.4-48.2S2162.4,1014.8,2162.4,1014.8z"
					/>
					<g>
						<path
							fill="#D4E4F8"
							d="M2579.8,757.9c0,0-374.6,121.3-417.4,256.9c0,0,1.8,60.6-35.7,130.2v26.8c0,0,39.2-91,60.6-103.5
				C2187.3,1068.3,2103.5,950.5,2579.8,757.9z"
						/>
						<path
							fill="#D4E4F8"
							d="M2126.7,1145c0,0-57.8,87.7-24.8,194.5l14.9-4c0,0-14.4-117.6,15.8-176.8
				C2162.7,1099.6,2126.7,1145,2126.7,1145z"
						/>
					</g>
				</g>
			</g>
			<path
				fill="#F2F7FC"
				d="M2068.2,1314.3c-5,11.8-52.6,22.7-123.2,32.3c-12.5,1.7-25.6,3.4-39.4,5c-240.5,28.3-899,44.1-939.6,35.8
	c-56.1-11.5-167.7-575.6-167.7-575.6s328.7-5.7,589.7-8.5c89.3-0.9,399.9-3.3,457.5-3.3C1934.6,800,2076.2,1295.2,2068.2,1314.3z"
			/>
			<path
				fill="#FFFFFF"
				d="M1977.2,1241.9c0,0-100.9-386.5-108.2-419c-3.2-14.5-13.2-19.7-23.3-21.1c17.7-1.7,30.6-1.8,30.6-1.8
	c34.9,0,65.9,23.5,77.1,58.4c24.4,76.2,73,222.5,118.6,365.5C2069.8,1223.9,1977.2,1241.9,1977.2,1241.9z"
			/>
			<path
				fill="#FFFFFF"
				d="M2588.8,1586.2c-16.1,97-121.3,158.7-229.2,158.7h-213.8l16.6-560.1c0,0,204.1-66.5,255.3-8
	c44.9,51.3,166.6,254.4,173,374.5C2591.3,1563.4,2590.6,1575,2588.8,1586.2z"
			/>
			<path
				fill="#D4E4F8"
				d="M2588.8,1586.2c-16.1,97-121.3,158.7-229.2,158.7h-104.9C2324.6,1700.3,2387.8,1562.9,2588.8,1586.2z"
			/>
			<path
				fill="#AAC8E8"
				d="M2021.3,1239.6c0,0,288.4-138.4,343-48c29,48,108.8,239.5,114.7,359.7c5.7,116.8-101.9,193.6-212.6,193.6
	h-196.6L2021.3,1239.6z"
			/>
			<path
				fill="#E1EFFF"
				d="M2401.3,1648.4c-3.2,2.6-6.5,5.1-9.8,7.5c-41.7,30.7-96,55.1-158.1,70.3c-47,11.4-98.4,17.6-152.2,17.1
	l-93.5,0h-1.3l-442.5,0.1l-253.6,0.1h-3.7l0-0.1l-8.8-46l-80.3-464.2c0,0,1111.4-25,1201.8,26.6c42,23.9,65.8,123.2,79,232.5
	C2485.2,1550.4,2455.5,1605.1,2401.3,1648.4z"
			/>
			<g id="guywithlaptop">
				<path
					fill="#FFB27D"
					d="M1787.4,808.2c-2.2-0.7-5.3-2.5-8-4.1h58.5c0,0-22.5-12.7-37.1-19.2c-14.6-6.5-50.4,0-50.4,0
		s-132.4-19.7-206.7-17.9c-19.9,0.5-161.6-22.6-202.4-14.4c-21.5,4.3-41,7.7-53.5,9.8c-7.7,1.2-14.8-4.3-15.4-12l0-0.1
		c-2.3-26.8-5.7-41.8-5.7-41.8l-49.8-24.1c-10.3,5.5-19.9,10.6-25,13.3c0.2,2.8,0.4,5.5,0.5,8.1c0.5,13.7-1,25.9-3.4,36.6
		c-4.5,19.7-19.8,35.2-39.4,40.4l-0.2,0.1c37.3,32.2,227.4,88.2,230.6,71.8c4.3-22.1,370.4-50.6,370.4-50.6v0c0,0,10.2,3.9,12.7,7.5
		s23,3.1,26.8,3.7C1793.8,815.7,1791.9,809.6,1787.4,808.2z"
				/>
				<path
					fill="#ED7D2B"
					d="M1917.3,1620.8c0,0,38.6,69.6,55.7,77.5c13.6,6.2,50.4,12.4,70.8,28.2c23.8,18.3-17.4,17.3-26.4,17.3
		c0,0-46-5.5-67.8-5c-12.6,0.3-50,5-50,5c-29.5,0-52-26.8-46.4-55.8c0.1-0.3,0.1-0.5,0.2-0.8c5.3-26.9,9.5-61.6,9.5-61.6
		L1917.3,1620.8z"
				/>
				<path
					fill="#699DEE"
					d="M1436.2,793.6c-0.8,18.1-5.9,38-22,48.4c-25.5,16.5-19,59.6-18.9,76.6l-109-156.1c0,0,30.2-7.7,66.4-11.7
		c22-2.4,79.9,4.2,79.9,4.2S1437.1,773.2,1436.2,793.6z"
				/>
				<path
					fill="#F99746"
					d="M1748.7,1648.1c0,0,38.5,42.4,55.6,50.2c12.2,5.6,45.1,8.9,64.7,23.1c20.7,15,4.8,22.4-7.2,22.4
		c0,0-55,4.4-90-5.5c-9.5-2.7-35.7,2.7-45,4.7c-2.8,0.6-20.8,2.1-23.7,1.7c-21.4-2.7-22.3-23.2-20.3-45.2c0.4-4.1,0.9-8.2,1.7-12.3
		c5.3-26.9,8.6-51.9,8.6-51.9L1748.7,1648.1z"
				/>
				<path
					fill="#233862"
					d="M1938.3,1624.8c0,0-13.9,9.7-26.1,13.8c-19.2,6.4-55.1,3.4-55.1,3.4s-91.6-177.7-110.9-222.6
		c-18.3-42.6-33.7-136-33.7-136c-14-0.8-118.6,14.1-210.5,4.1c-48.9-5.3-90.3-17.4-104.3-42.1c-40.4-71.1,88.6-150.5,88.6-150.5
		s252.3,45.5,307.7,85.7C1846.6,1218.8,1938.3,1624.8,1938.3,1624.8z"
				/>
				<path
					fill="#2A4E96"
					d="M1762.4,1646c0,0-19.6,10.3-32.3,12.4c-23.1,3.9-47.9-3.8-47.9-3.8s-14.1-85.1-71.8-221.3
		c-14.5-34.2-12.3-104.2-14.2-105.1c0,0-315.6,2.7-352.2-68.2c-5.9-11.5-12.6-43.9-11.8-54.4c3.8-56,76.6-77.7,76.6-77.7
		s329,58.2,385.4,97C1750.6,1263.7,1762.4,1646,1762.4,1646z"
				/>
				<path
					fill="#699DEE"
					d="M1512.9,1097.3c-19.2,34.2-39.1,61.3-112.5,74c-92.5,16-143.1,35.6-168.8,43.3
		c-19.6,5.9-75.9-65.8-102.7-129.9c-26-62-48.1-158.6-48.3-166.1c-2.3-115.1,85.2-142.7,85.2-143c0,0,65,44.2,100.4,28.8
		c34.9-15.1,20.5-41.2,20.1-41.9l93.8,92.1c0,0,21.1,80.8,46.6,139.5C1465.2,1083,1518.1,1087.9,1512.9,1097.3z"
				/>
				<path
					fill="#ED985F"
					d="M1266.8,708.4c0,0,3.3,15,5.7,41.8c-42.3-1.4-75.8-45.2-76-48c5.1-2.7,10.2-12.4,20.5-17.9L1266.8,708.4z"
				/>
				<path
					fill="#FFB27D"
					d="M1276.7,735.4c0,0-89-2.5-86.5-57.9c2.4-55.4-7.4-93,49.5-93.7c56.9-0.7,67,20.9,70.7,39.6
		C1314,642,1299.9,734.6,1276.7,735.4z"
				/>
				<path
					fill="#2B478B"
					d="M1195,699.8c0,0-3.5-18.4,6.4-30.6c0,0-6.5-18,0.4-22.1c6.9-4.1,10.6,11.3,13.6,8.4
		c3-2.9,16.4-16.6,20.5-34.7c4.1-18,65.8-5.4,73.1-3.2c1.2,0.4,2.8,0.3,4.6-0.2c15.5-4,20.1-24,8.1-34.6c-0.7-0.6-1.4-1.3-2-1.9
		c-6.5-6.6-52-50.9-103.9-29.4c-52,21.5-55.8,48.3-49.7,69.9C1172.2,643.1,1171.9,695.5,1195,699.8z"
				/>
				<path
					fill="#FFFFFF"
					d="M1258,701.3c0,0,5.8,8,17.8,10.1c12,2.1,14.7-7.3,14.7-7.3S1279.4,700.6,1258,701.3z"
				/>
				<path
					fill="#FFB27D"
					d="M1102.7,839.5c0,0-15.3,30.4-1,86c28.2,109.6,141.4,198.7,157.8,190.4s59.3-7,36.1-56.8
		c-23.2-49.8-117.2-233.6-117.2-233.6L1102.7,839.5z"
				/>
				<path
					fill="#699DEE"
					d="M1240.2,946.4c-29.6,16.5-51.4,29.8-96.8,29.6c-34.2-0.1-62.3-6.7-62.3-6.7s-35.1-142.7,30.5-172.1
		c22.6-10.1,54.3-21.7,54.3-21.7S1293.3,916.8,1240.2,946.4z"
				/>
				<path
					fill="#FFB27D"
					d="M1473.1,1071.2c0,0-158.2-16.9-179.5-16.1c-21.2,0.8-42.8,57.9-39.8,60.9s66.7,6.1,106,3.3
		c43.2-3,98.3-17,98.3-17L1473.1,1071.2z"
				/>
				<g id="laptop">
					<path
						fill="#ED7D2B"
						d="M1485.8,1146.8h-205.2l0,0c0-9,7.3-16.4,16.4-16.4h188.8V1146.8z"
					/>
					<polygon
						fill="#ED7D2B"
						points="1485.3,923.3 1802.4,923.3 1726.4,1146.8 1407.1,1146.8 		"
					/>
					<polygon
						fill="#F99746"
						points="1807.1,923.3 1731,1146.8 1411.8,1146.8 1489.9,923.3 		"
					/>
					<path
						fill="#FFFFFF"
						d="M1636.1,1033c-2,8.5-10.5,15.5-19,15.5c-8.5,0-13.9-6.9-11.9-15.5c2-8.5,10.5-15.5,19-15.5
			C1632.8,1017.5,1638.1,1024.4,1636.1,1033z"
					/>
				</g>
			</g>
			<path
				opacity="0.5"
				fill="#BCD4F6"
				d="M2401.3,1648.4c-3.2,2.6-6.5,5.1-9.8,7.5c-41.7,30.7-96,55.1-158.1,70.3
	c-47,11.4-98.4,17.6-152.2,17.1l-93.5,0h-1.3l-442.5,0.1l-253.6,0.1l-3.8-0.1l-8.8-46c155.5-30,370.6-60.6,595-58.2
	C2087,1641.5,2266.5,1641.2,2401.3,1648.4z"
			/>
			<path
				fill="#FFFFFF"
				d="M1506,1589.2c-17.3,94-112.5,153.6-210,153.6h-196.6l15.4-565.1c0,0,187.6-61.6,234.7-3
	c41.3,51.3,153.2,254.4,159.1,374.5C1509.2,1563.1,1508.3,1576.5,1506,1589.2z"
			/>
			<path
				fill="#D4E4F8"
				d="M1506,1589.2c-17.3,94-112.5,153.6-210,153.6h-157.3C1212.3,1695.9,1311.5,1566.2,1506,1589.2z"
			/>
			<path
				fill="#BCD4F6"
				d="M854.4,1744.8c-49.3-0.3-102.3-10.9-142.4-41c-39-29.3-62.1-73.8-76.2-119.6c-30-97.8-29.2-205-25.9-306.3
	c3.5-109.6,13.4-219.3,26.1-328.2c4.2-36,5.4-82.5,24-114.9c14.6-25.3,69.2-33.7,95.5-33.1c21.9,0.6,43.1,19.5,61.6,30.3
	c12.4,7.3,24.8,14.6,37.2,21.9c12.1,7.1,12.5,19.5,16.7,32.7c35.4,110.8,70.2,221.8,106,332.5c42.1-17.7,84.9-33.6,129-45.7
	c41.4-11.3,88.8-22.4,131.8-13.4c44.7,9.3,58.3,52.4,74.6,90c21.6,49.8,40.3,100.9,55.7,153c15,50.6,30,105.5,28.8,158.8
	c-1.1,48-23.1,92.5-58.7,124.3c-45.4,40.7-105.1,58.6-164.9,58.6C1067.1,1744.8,960.7,1744.8,854.4,1744.8z"
			/>
			<path
				fill="#FFFFFF"
				d="M885.8,1241.9c0,0-100.9-386.5-108.2-419c-3.2-14.5-13.2-19.7-23.3-21.1c17.7-1.7,30.6-1.8,30.6-1.8
	c34.9,0,65.9,23.5,77.1,58.4c24.4,76.2,69.4,216.6,115,359.7C974.8,1218,885.8,1241.9,885.8,1241.9z"
			/>
			<g>
				<path
					fill="#BCD4F6"
					d="M967.6,1221.3v13.3c0,4.7-1.5,8.5-3.3,8.5H479.3c-1.8,0-3.3-3.8-3.3-8.5v-13.3c0-4.6,1.5-8.5,3.3-8.5h484.9
		C966.1,1212.9,967.6,1216.7,967.6,1221.3z"
				/>
				<path
					fill="#D4E4F8"
					d="M967.6,1221.3v13.3c0,4.7-1.4,8.5-3.1,8.5h-385c-1.7,0-3.1-3.8-3.1-8.5v-13.3c0-4.6,1.4-8.5,3.1-8.5h385
		C966.2,1212.9,967.6,1216.7,967.6,1221.3z"
				/>
				<rect x="500.6" y="1243.1" fill="#A4C4F4" width="344.3" height="501.8" />
				<rect x="597" y="1243.1" fill="#F3F8FF" width="344.3" height="501.8" />
				<g>
					<g>
						<path
							fill="#B7D3F3"
							d="M922.8,1717.1H615.5v-459.9h307.3V1717.1z M618.9,1713.8h300.6v-453.3H618.9V1713.8z"
						/>
					</g>
					<g>
						<rect x="617.2" y="1409.4" fill="#B7D3F3" width="304" height="3.3" />
					</g>
					<g>
						<rect x="617.2" y="1564.5" fill="#B7D3F3" width="304" height="3.3" />
					</g>
					<path
						fill="#B7D3F3"
						d="M800.3,1286.9h-56.4c-2.7,0-5-2.2-5-5l0,0c0-2.7,2.2-5,5-5h56.4c2.7,0,5,2.2,5,5l0,0
			C805.3,1284.7,803.1,1286.9,800.3,1286.9z"
					/>
					<path
						fill="#B7D3F3"
						d="M800.3,1438.6h-56.4c-2.7,0-5-2.2-5-5l0,0c0-2.7,2.2-5,5-5h56.4c2.7,0,5,2.2,5,5l0,0
			C805.3,1436.3,803.1,1438.6,800.3,1438.6z"
					/>
					<path
						fill="#B7D3F3"
						d="M800.3,1596.7h-56.4c-2.7,0-5-2.2-5-5l0,0c0-2.7,2.2-5,5-5h56.4c2.7,0,5,2.2,5,5l0,0
			C805.3,1594.4,803.1,1596.7,800.3,1596.7z"
					/>
				</g>
			</g>
			<g>
				<g>
					<g>
						<path
							fill="#FCECDB"
							d="M625.6,1212.9H525.2v-35.5h100.8c7.8,0,14.2,6.4,14.2,14.2v6.8C640.1,1206.4,633.6,1212.9,625.6,1212.9z"
						/>
						<path
							fill="#699DEE"
							d="M725.9,1192v5.3c0,2.9-0.8,5.5-2.1,7.8c-2.7,4.6-7.7,7.7-13.4,7.7H522.1c-1.2,0-2.3-1-2.3-2.3v-0.8
				c0-1.2,1-2.3,2.3-2.3h114.8c0.6-0.7,1.2-1.6,1.6-2.4c1.1-2,1.7-4.3,1.7-6.8v-6.8c0-1.2-0.2-2.5-0.5-3.6c-0.5-2-1.4-3.7-2.7-5.3
				H522.1c-1.2,0-2.3-1-2.3-2.3v-0.8c0-1.2,1-2.3,2.3-2.3h189.2c6.7,0,12.3,4.5,14,10.6C725.7,1189.2,725.9,1190.6,725.9,1192z"
						/>
						<path
							fill="#548EE2"
							d="M725.3,1188h-85.6c-0.5-2-1.4-3.7-2.7-5.3H522.1c-1.2,0-2.3-1-2.3-2.3v-0.8c0-1.2,1-2.3,2.3-2.3h189.2
				C717.9,1177.4,723.6,1181.8,725.3,1188z"
						/>
					</g>
					<polygon fill="#F4D2B8" points="525.2,1195.1 539.1,1195.7 525.2,1196.1 		" />
					<polygon fill="#F4D2B8" points="525.2,1200.7 558.3,1201.3 525.2,1201.6 		" />
				</g>
				<g>
					<g>
						<g>
							<path
								fill="#FCECDB"
								d="M637.5,1177.5h109.3v-40.5H637.1c-8.8,0-15.8,7.1-15.8,15.8v8.5C621.3,1170.2,628.5,1177.5,637.5,1177.5
					z"
							/>
							<path
								fill="#F99746"
								d="M623.8,1152.6v8.7c0,3.7,2.1,7,5.1,8.7c1.5,0.8,3.2,1.3,5.1,1.3h118.7c1.4,0,2.5,1.1,2.5,2.5v1
					c0,1.4-1.1,2.5-2.5,2.5h-205c-5.9,0-11.1-2.9-14.2-7.4c-2-2.8-3.1-6.3-3.1-10v-6.9c0-2.5,0.6-4.9,1.6-7.1
					c2.6-5.5,8.2-9.2,14.7-9.2h206c1.4,0,2.5,1.1,2.5,2.5v1c0,1.4-1.1,2.5-2.5,2.5h-119c-2.8,0-5.4,1.2-7.2,3.1
					C624.8,1147.8,623.9,1150.1,623.8,1152.6z"
							/>
						</g>
						<polygon fill="#F4D2B8" points="746.7,1157.2 731.5,1157.9 746.7,1158.3 			" />
						<polygon fill="#F4D2B8" points="746.7,1147.8 710.6,1148.5 746.7,1148.9 			" />
					</g>
					<g>
						<path
							fill="#F99746"
							d="M710.9,1148.4c0,0,2.4,1.3,3.2,3.4c0.1,0.4,0.2,0.8,0.2,1.2c0.1,2.8,0,9.2,0,9.2l7.1-3.2l7,3.2v-8.6
				c0-1.6-0.6-3.2-1.7-4.3c-0.5-0.5-1.2-0.9-1.9-0.9H710.9z"
						/>
						<path
							fill="#ED7D2B"
							d="M710.9,1148.4c0,0,2.4,1.3,3.2,3.4l14.1,0.1c0,0-0.6-3-3.5-3.5H710.9z"
						/>
					</g>
				</g>
			</g>
			<g>
				<path
					fill="#F99746"
					d="M936.2,1125.8H824.8c-0.3,2.3-0.5,4.6-0.5,7v10.8c-7.4-1.6-17.7-2.8-22.9,0.4c-8.8,5.5-6.1,21.5,2.2,31.3
		c8.3,9.9,34.8,16.4,34.8,16.4c8.4,9.5,20,16.2,33.1,18.4c2.9,0.5,5.9,0.7,9,0.7c30.9,0,56.2-25.3,56.2-56.2v-21.9
		C936.6,1130.5,936.5,1128.2,936.2,1125.8z M807.3,1164.3c-3.6-9.2-1.2-12.6,2.8-13.3c4.4-0.8,10.5,2.3,14.4,7.5
		c0.4,6.5,2,12.7,4.5,18.5C822.7,1175.4,810.1,1171.5,807.3,1164.3z"
				/>
				<polygon
					fill="#F99746"
					points="853.5,1212.9 904.5,1212.9 901.6,1206 855.7,1204.3 	"
				/>
				<path
					fill="#ED7D2B"
					d="M872.2,1204.9c-33.7-39-26.4-57.9-20.4-79.1h-27c-0.3,2.3-0.5,4.6-0.5,7v10.8c-7.4-1.6-17.7-2.8-22.9,0.4
		c-8.8,5.5-6.1,21.5,2.2,31.3c8.3,9.9,34.8,16.4,34.8,16.4c4.8,5.4,10.6,9.9,17.2,13.2l-2.1,7.9h17.3l0.5-2.8c0.1,0,0.1,0,0.2,0
		L872.2,1204.9z M807.3,1164.3c-3.6-9.2-1.2-12.6,2.8-13.3c4.4-0.8,10.5,2.3,14.4,7.5c0.4,6.5,2,12.7,4.5,18.5
		C822.7,1175.4,810.1,1171.5,807.3,1164.3z"
				/>
			</g>
			<g id="textBox">
				<path
					fill="#699DEE"
					d="M669.7,411.2h249.6c19.9,0,36.2,16.3,36.2,36.2v109.5c0,18.3-15,33.2-33.2,33.2h-6.4l12,50.8l-75.5-50.8
		H667.5c-19.9,0-36.1-16.3-36.1-36.1V449.5C631.4,428.4,648.6,411.2,669.7,411.2z"
				/>
				<path
					fill="#AAC8E8"
					d="M672.8,508h227.5c3.1,0,5.7-2.6,5.7-5.7v-0.2c0-3.1-2.6-5.7-5.7-5.7H672.8c-3.1,0-5.7,2.6-5.7,5.7v0.2
		C667,505.5,669.6,508,672.8,508z"
				/>
				<path
					fill="#AAC8E8"
					d="M670.9,534.1h101.7c2.1,0,3.9-1.7,3.9-3.9v-3.9c0-2.1-1.7-3.9-3.9-3.9H670.9c-2.1,0-3.9,1.7-3.9,3.9v3.9
		C667,532.3,668.8,534.1,670.9,534.1z"
				/>
				<path
					fill="#AAC8E8"
					d="M791,534.1h88.6c2,0,3.6-1.6,3.6-3.6v-4.4c0-2-1.6-3.6-3.6-3.6H791c-2,0-3.6,1.6-3.6,3.6v4.4
		C787.3,532.4,789,534.1,791,534.1z"
				/>
				<path
					fill="#AAC8E8"
					d="M741.7,461.1h81.6c3.1,0,5.7-2.6,5.7-5.7l0,0c0-3.1-2.6-5.7-5.7-5.7h-81.6c-3.1,0-5.7,2.6-5.7,5.7l0,0
		C736,458.6,738.6,461.1,741.7,461.1z"
				/>
				<path
					fill="#AAC8E8"
					d="M671.5,461.1h49.1c2.5,0,4.5-2,4.5-4.5v-2.4c0-2.5-2-4.5-4.5-4.5h-49.1c-2.5,0-4.5,2-4.5,4.5v2.4
		C667,459.1,669,461.1,671.5,461.1z"
				/>
			</g>
		</svg>
	);
}

export default DevOnSofa;
