import './mylabel.css';

export interface Props {
    /**
     * Is this the label text 
     */
    label: string;

    /** 
     *Is this the label size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /** 
     *Is this the label text case?
     */
    allCaps?: boolean;

    /** 
     *Is this the label text color?
     */
    color?: 'primary' | 'secondary' | 'tertiary';

    /** 
     *What font color to use?
     */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor
}: Props ) => {
  return (
    <span 
        className={ `label ${ size } text-${ color }` }
        style={{ color: fontColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
