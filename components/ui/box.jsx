import { cn } from '@/lib/utils';

function Box({
  as: Component = 'div',
  className,
  children,
  ...props
}) {
  return (
    <Component {...props} className={cn(className)}>
      {children}
    </Component>
  );
}

export default Box;
