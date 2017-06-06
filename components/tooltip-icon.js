import React, { PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from 'react-md/lib/FontIcons';
import injectTooltip from 'react-md/lib/Tooltips';

const TooltipFontIcon = injectTooltip(({ children, iconClassName, className, tooltip, ...props }) => (
    <div className='tooltip-container'>
        <div
            {...props}
            className={classnames(className, 'inline-rel-container')}
        >
            {tooltip}
            <FontIcon
                iconClassName={iconClassName}>{children}
            </FontIcon>

        </div>
        <style jsx>{`
        .md-tooltip-container {
            width: 0;
            left: 'inherit';
            margin-left: 10px;
        }

        .tooltip-container {
            margin-left: 5px;
            display: inline-block
        }
        `}</style>
    </div>
));

export default TooltipFontIcon;
