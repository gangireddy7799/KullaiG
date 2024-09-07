import Image from 'next/image';

const TestImage = () => {
  return (
    <div>
      <h1>Optimized Image Example</h1>
      <Image
        src="/images/developer-pic.png"
        alt="Description of the image"
        width={800}
        height={600}
      />
    </div>
  );
};

export default TestImage;
