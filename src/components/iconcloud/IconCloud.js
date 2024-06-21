import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Cloud, fetchSimpleIcons, renderSimpleIcon} from 'react-icon-cloud';
import Title from '../layouts/Title';

const iconSlugs = [
  'nodedotjs',
  'react',
  'intellij',
  'bootstrap',
  'express',
  'go',
  'scikitlearn',
  'mongodb',
  'c',
  'cplusplus',
  'docker',
  'kubernetes',
  'git',
  'github',
  'javascript',
  'numpy',
  'pandas',
  'matplotlib',
  'tailwindcss',
  'python',
  'html5', // Add HTML icon slug
  'css3', // Add CSS icon slug
];

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = () => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((response) => {
      setData(response);
    });
  }, []);

  const renderedIcons = data
    ? Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, theme || 'light'))
    : null;

  return (
        <section id="iconcloud" className="w-full py-20 border-b-[1px] border-b-black ">
        <div className="flex justify-center items-center text-center mt-10">
        <Title
          title="Technologies that I have used earlier and skills I am learning at the moment"
          des="Tech Stack"
        />
      </div>
      <Cloud
      containerProps={{
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingTop: 40,
        },
      }}
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: 'default',
        tooltip: 'native',
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: '#0000',
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
    >
      {renderedIcons}
    </Cloud>
        </section>



  );
};

export default IconCloud;
