import React from 'react';
import Button from '../button';

export default function IconText() {
    return (
        <Button type="link" to="/dashboard" className="font-bold text-2xl text-gray-700">
            <span className="text-gray-700">|</span>
            NEWS
            <span style={{ color: '#06CDC1' }}>Logo</span>
        </Button>
    );
}
