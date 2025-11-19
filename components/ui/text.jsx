import { cn } from '@/lib/utils';

const baseStyles = {
  h1: 'font-geistSans text-[24px] leading-[32px] md:text-[40px] md:leading-[56px] text-[#151211] mb-5',
  h2: 'font-geistSans text-[24px] leading-[32px] md:text-[40px] md:leading-[56px] text-[#151211] mb-5',
  h3: 'font-geistMono text-sm text-black font-medium mb-4',
  h4: 'font-geistMono text-sm font-normal text-[#151211]',
  h5: 'font-geistMono text-sm font-medium tracking-tight text-black',
  h6: 'font-geistMono text-sm sm:text-base tracking-tight text-black',
  p: 'font-geistMono text-[14px] leading-[24px] text-[#151211] mb-4',
  span: 'font-geistMono text-sm',
  div: 'font-geistMono text-base text-black',
};

function Text({ as: Tag = 'p', className, children, ...props }) {
  return (
    <Tag {...props} className={cn(baseStyles[Tag], className)}>
      {children}
    </Tag>
  );
}

export default Text;
