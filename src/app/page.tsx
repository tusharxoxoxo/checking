import Counter from "@/components/counter";;

//export default function Home() {
//  return (
//      <Counter />
//  );
//}

import * as React from 'react';

interface IconTextProps {
  src: string;
  alt: string;
  text: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  icons: IconTextProps[];
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  id: string;
  inputType: string;
}

const IconText: React.FC<IconTextProps> = ({ src, alt, text }) => (
  <div className="flex gap-2 mt-2 leading-[120%] text-neutral-300">
    <img loading="lazy" src={src} alt={alt} className="shrink-0 self-start w-3.5 aspect-square" />
    <div className="flex-1">{text}</div>
  </div>
);

const Section: React.FC<SectionProps> = ({ title, subtitle, icons }) => (
  <section className="flex flex-col px-6 pt-5 pb-6 w-full text-sm bg-neutral-900">
    <h1 className="text-2xl leading-8 text-white">{title}</h1>
    <div className="flex gap-2.5 mt-2 text-xs">
      <div className="flex gap-2 px-3 py-1.5 rounded-md bg-white bg-opacity-10 leading-[103%] text-neutral-50">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f0270d9d006d1aceddb21e25886905c9553b651c70b48125f28f927d848b7e4?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="Certification Programme" className="flex-1 shrink-0 self-start w-full aspect-[0.75]" />
        <div>{subtitle}</div>
      </div>
      <div className="flex gap-1 py-px my-auto text-right text-amber-300 rounded-xl leading-[120%]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83980baa8b6986632ee5c84418e2262f5e8b62dfc7bf515701d4cf60328160d2?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="Rated 4.85/5" className="flex-1 shrink-0 my-auto w-full aspect-[1.1]" />
        <div>Rated 4.85/5</div>
      </div>
    </div>
    {icons.map((icon, index) => (
      <IconText key={index} {...icon} />
    ))}
    <div role="button" className="justify-center p-1.5 mt-6 text-xs font-bold leading-4 text-white uppercase bg-pink-500 rounded-xl">
      Fill the form below to enquire
    </div>
  </section>
);

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, id, inputType }) => (
  <div>
    <label htmlFor={id} className="sr-only">{label}</label>
    <input className="px-3 pt-2 pb-2 mt-3 bg-white rounded border border-solid border-zinc-300 text-stone-300 w-full" type={inputType} id={id} placeholder={placeholder} aria-label={label} />
  </div>
);

const MyComponent: React.FC = () => (
  <div className="flex flex-col mx-auto w-full max-w-[480px]">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3751f9346b0cfb1895c647fdb25a0b0ec5fe8de42ed92de5890afbcb193312a?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="Professional Online Makeup Course" className="w-full aspect-[3.03]" />
    <Section
      title="Professional Online Makeup Course"
      subtitle="Certification Programme"
      icons={[
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/42c601311de250d588108535b19b09f33c4f289af614228c54a1774bd7ee1be2?apiKey=d6d78ede399248d3bf74034d8d6279e1&', alt: 'India’s No.1 Online Makeup Course', text: 'India’s No.1 Online Makeup Course' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/21ee6c027d44c7e5c7462f989553f8cb2c973da257f6abd7b4a7b1a6686272b4?apiKey=d6d78ede399248d3bf74034d8d6279e1&', alt: 'Learn by LIVE Do-it-Together Classes', text: 'Learn by LIVE Do-it-Together Classes' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5bb826bde18c8a5333316ae55678a15039f17141f9e77d7571abd8963207df1b?apiKey=d6d78ede399248d3bf74034d8d6279e1&', alt: 'Unlimited Practise Session to master skills', text: 'Unlimited Practise Session to master skills' },
      ]}
    />
    <form className="flex z-10 flex-col p-2.5 w-full font-semibold bg-white rounded-none leading-[125%]">
      <FormField label="Enter your name" placeholder="Eg. Aneesha Mehra" id="name" inputType="text" />
      <div className="mt-2.5">
        <label htmlFor="whatsapp" className="sr-only">Enter your WhatsApp Number</label>
        <div className="flex gap-3 mt-3">
          <div className="flex gap-1 justify-between self-start px-3 pt-2 pb-2.5 whitespace-nowrap bg-white rounded border border-solid border-zinc-300 text-neutral-600">
            <div>+91</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59db1d0032c9f96298e1b693353a92b6096af2fedcb54f445251c5361dfd955b?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="Country Code" className="shrink-0 self-start w-2.5 aspect-[1.43] fill-black fill-opacity-30" />
          </div>
          <input className="flex-1 items-start px-3 pt-2 pb-2.5 bg-white rounded border border-solid border-zinc-300 text-stone-300" type="tel" id="whatsapp" placeholder="Eg. 0000000000" aria-label="Enter your WhatsApp Number" />
        </div>
      </div>
      <FormField label="Select your profession" placeholder="Choose the most relevant option" id="profession" inputType="text" />
      <FormField label="Select your goal" placeholder="Choose the most relevant option" id="goal" inputType="text" />
      <FormField label="Select your city" placeholder="Choose the most relevant option" id="city" inputType="text" />
      <button className="justify-center items-center px-16 py-2.5 mt-5 font-bold text-center whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50">Submit</button>
    </form>
    <section className="flex flex-col justify-center px-2 w-full text-2xl leading-8 text-center text-neutral-100">
      <div className="flex flex-col justify-center w-full bg-black">
        <div className="flex gap-0 items-start">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcbf27dd7c3e0720297d47d6b8bd355fa4004557f3eb0bcd9149fd162867c5f1?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-[0.7] w-[62px]" />
          <div className="flex z-10 gap-5 justify-center pl-16 mt-8">
            <div>Why Should You <br /> Join Airblack?</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5bdc3aac26c6351d60b02780abb446975ca7ee458f27606515afc66417eea9a?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="flex-1 shrink-0 my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22d4acdad77b540907da00dc4e5180f9b0a93eff522c80ebdb4f9819c5784995?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-[0.74] w-[65px]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/619b64833e6f52fe08a3b943cbb5d0bcdb2a053d35f04d168f392c5a90770673?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="w-full aspect-[3.03]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4614af45f90f9ddde3ae036f2b5847272d184f4a95ace63437710ed63b6777be?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="self-center rounded aspect-[4] w-[360px]" />
      </div>
    </section>
    <section className="flex flex-col justify-center px-2 py-8 w-full text-2xl leading-8 text-center bg-black text-neutral-100">
      <div className="flex gap-5 justify-center items-center self-center px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98777424ead26ed18356a214d1a9aa862024a08052280ef3471cf961f1489f7f?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
        <div>Get Certified From <br /> India’s Biggest <br /> Beauty Platform</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/24fc9be8500f3f049e7eb9eadfca51f5eaed003f1d40cedfbebdbe0830fe561d?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34c2855dce6590a10a4d19b8b8dded3d9ac591ea6500284d0fc173ecf44b1e97?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="mt-3.5 w-full aspect-[1.43]" />
    </section>
    <section className="flex flex-col justify-center w-full bg-white">
      <div className="flex flex-col justify-center w-full bg-black">
        <div className="flex gap-0 px-5 w-full">
          <div className="flex flex-col items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c64ae61e91cb99dcae96079a1aee7a70f8c30b23fe884559e53bcda49acaf6fe?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="aspect-[0.55] w-[57px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06174f4aad91f2045d3ae9516732a842c0cffbbf0eeba112e3dfc8e4d9dd4240?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="aspect-[0.46] w-[57px]" />
          </div>
          <div className="flex z-10 flex-col self-start mt-16 text-center">
            <h2 className="text-2xl leading-8 text-white">Join our growing <br /> community of <br /> 35,000<span className="">+</span> alumni</h2>
            <button className="justify-center items-center px-16 py-2.5 mt-6 text-sm font-bold leading-4 rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] text-neutral-50">Apply Now</button>
          </div>
          <div className="flex flex-col items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6b4428bde96d160f4f5a6a38a6d3299396d266ca4bbe5777f08f455aa51a8a?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="aspect-[0.66] w-[68px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fefc76e4cfdde6916b1acfec00bfdbffd990cc26ab29005cc91891ef2635909?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="aspect-[0.54] w-[68px]" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-auto gap-0 px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12de6aca16078f302c675ca0f3e1a08196bceba7c41a98a96d2b055b5f286088?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-[0.55] w-[57px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0849fe810c0b63bb707589f6e6077bfc3618243188f0f7546c2a3d0845b4c89d?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 max-w-full aspect-[1.2] w-[125px]" />
            <div className="flex overflow-hidden relative flex-col justify-center items-start pt-2 pb-16 aspect-[1.2] w-[125px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a7e72b357aa2d00bb25758fcd2d816a69ae86c21ed4ab306357d3bb6ed5c013?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="object-cover absolute inset-0 size-full" />
              <div className="flex relative gap-4 justify-between">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10269fec5a1e06d43a62e2cac4f36e7001cd529f0bd8760413a221cf2843bb73?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-square w-[34px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a08b9a81007073e6cb084f49ab38dc7c4ea6c2af24cd54e35f710c67792a5461?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 self-start aspect-square w-[33px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28274d9affb7bdf05b4f13b76a99da19704ddab57046651d9b8fd538f532809f?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-square w-[34px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/352957b36a587f97031da395a6f3ea92e27274594b8a62cd71d5ca407fed7e0d?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 self-start aspect-square w-[33px]" />
              </div>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b19c55bcd0e301418d52d81fea717aaf9d3f92bfef17321a3323e3e383b0861e?apiKey=d6d78ede399248d3bf74034d8d6279e1&" alt="" className="shrink-0 aspect-[0.55] w-[57px]" />
        </div>
      </div>
    </section>
  </div>
);

export default MyComponent;
