/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: Props) => JSX.Element;
