import React from 'react';
import Link from 'gatsby-link';

export default () => (
    <div style={{ color: 'red' }}>
        Hello world!
        <div>
            <Link to="/page-2/">Link</Link>
        </div>
    </div>
);
