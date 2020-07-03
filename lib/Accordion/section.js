import React, { useCallback } from 'react';
import { ChevronDown as ArrowDown, ChevronUp as ArrowUp } from 'react-feather';

import { useAccordionContext } from './accordion';
import Icon from '../Icon';
import  './section.scss';

const Section = props => {
    const { children, id, title, arrowUp, arrowDown } = props;

    const { handleSectionToggle, openSectionIds } = useAccordionContext();

    const handleSectionToggleWithId = useCallback(
        () => handleSectionToggle(id),
        [handleSectionToggle, id]
    );

    const isOpen = openSectionIds.has(id);
    const titleIconSrc = isOpen ? arrowUp ? arrowUp : ArrowUp : arrowDown ? arrowDown : ArrowDown;
    const titleIcon = <Icon src={titleIconSrc} />;

    const contentsContainerClass = isOpen
        ? `contents_container`
        : `contents_container_closed`;
    const titleContainerClass = isOpen
        ? `title_container_open btn`
        : `title_container btn`;

    return (
        <div className="accordian_section_root">
            <button
                className={titleContainerClass}
                onClick={handleSectionToggleWithId}
            >
                <div className="title">{title}</div>
                {titleIcon}
            </button>
            <div className={contentsContainerClass}>{children}</div>
        </div>
    );
};

export default Section;
