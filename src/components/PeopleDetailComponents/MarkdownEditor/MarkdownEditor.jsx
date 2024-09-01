import React from 'react';
import MarkDownStore from '../../../stores/MarkDownStore.js';
import { MarkDownBox, MarkDownButton, StyledMarkdown } from './MarkdownEditor.styled.jsx';
import Text from "../../Common/Text.jsx";

function MarkdownEditor() {
    const { content, editMode, setContent, setEditMode } = MarkDownStore();
    const [tempContent, setTempContent] = React.useState(content);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setContent(tempContent);
        setEditMode(false);
    };

    return (
        <MarkDownBox>
            {editMode ? (
                <textarea
                    value={tempContent}
                    onChange={e => setTempContent(e.target.value)}
                    style={{ width: '100%', height: '100%', fontFamily: 'KakaoRegular', fontSize: '17px' }}
                />
            ) : (
                <StyledMarkdown>{content}</StyledMarkdown>
            )}
            {editMode ? (
                <MarkDownButton onClick={handleSave}>
                    <Text
                        value="소개 완료!"
                        fontFamily="KakaoBold"
                        fontSize={15}
                        color="#715F00"
                    />
                    </MarkDownButton>
            ) : (
                <MarkDownButton onClick={handleEdit}>
                    <Text
                        value="자기소개하기"
                        fontFamily="KakaoBold"
                        fontSize={15}
                        color="#715F00"
                    />
                </MarkDownButton>
            )}
        </MarkDownBox>
    );
}

export default MarkdownEditor;

