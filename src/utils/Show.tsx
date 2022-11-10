import Switch from './Switch';
import FragmentSwitch from './FragmentSwitch';

interface IShowProps<T> {
  children: React.ReactNode | ((isValideValue: Exclude<T, undefined>) => React.ReactNode);
  isValide: T;
}
const Show = <T,>({ isValide, children }: IShowProps<T>): JSX.Element => {
  return (
    <Switch>
      <FragmentSwitch data-caseswitch={isValide && typeof children === 'function'}>
        {(children as Exclude<typeof children, React.ReactNode>)(isValide as Exclude<T, undefined>)}
      </FragmentSwitch>
      <FragmentSwitch data-caseswitch={isValide}>{children as React.ReactNode}</FragmentSwitch>
    </Switch>
  );
};
export default Show;
