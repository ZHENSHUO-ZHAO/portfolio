import getBrandIcon from "../../utils/brands";

export default function BrandIcon({ name }: { name: string }) {
  const Icon = getBrandIcon(name);
  return Icon ? (
    // eslint-disable-next-line react-hooks/static-components
    <Icon className="" aria-hidden="true" focusable="false" />
  ) : null;
}
