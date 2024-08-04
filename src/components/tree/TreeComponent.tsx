'use client'
import React from 'react';
import { TreeItem } from '@mui/x-tree-view';
import { SimpleTreeView as TreeView } from '@mui/x-tree-view/SimpleTreeView';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, CircularProgress, LinearProgress } from '@mui/material';

interface TreeNode {
    id: string;
    name: string;
    image: string;
    mobile: string;
    max: number,

    children?: TreeNode[];
}

interface TreeComponentProps {
    data: TreeNode;
}

const data = {
    "id": "1",
    "name": "Root Node",
    "image": "https://example.com/root.png",
    "mobile": "+1234567890",
    "max": 12,
    "children": [
        {
            "id": "2",
            "name": "Child Node 1",
            "image": "https://example.com/child1.png",
            "mobile": "+1234567891",
            "max": 3,

            "children": [
                {
                    "id": "4",
                    "name": "Grandchild Node 1",
                    "image": "https://example.com/grandchild1.png",
                    "mobile": "+1234567892",
                    "max": 3,
                    "children": [],
                },
                {
                    "id": "5",
                    "name": "Grandchild Node 2",
                    "image": "https://example.com/grandchild2.png",
                    "mobile": "+1234567893",
                    "max": 3,
                    "children": []
                }
            ]
        },
        {
            "id": "3",
            "name": "Child Node 2",
            "image": "https://example.com/child2.png",
            "mobile": "+1234567895",
            "max": 3,

            "children": [
                {
                    "id": "7",
                    "name": "Grandchild Node 4",
                    "image": "https://example.com/grandchild4.png",
                    "mobile": "+1234567896",
                    "max": 3,

                    "children": []
                },
                {
                    "id": "8",
                    "name": "Grandchild Node 5",
                    "image": "https://example.com/grandchild5.png",
                    "mobile": "+1234567897",
                    "max": 3,

                    "children": []
                },
                {
                    "id": "9",
                    "name": "Grandchild Node 6",
                    "image": "https://example.com/grandchild6.png",
                    "mobile": "+1234567898",
                    "max": 3,

                    "children": []
                }
            ]
        },
        {
            "id": "10",
            "name": "Child Node 3",
            "image": "https://example.com/child3.png",
            "mobile": "+1234567899",
            "max": 3,

            "children": [
                {
                    "id": "11",
                    "name": "Grandchild Node 7",
                    "image": "https://example.com/grandchild7.png",
                    "mobile": "+12345678910",
                    "max": 3,

                    "children": []
                }
            ]
        }
    ]
}


const renderTree = (nodes: TreeNode) => {

    const calculateTotalChildren = (node: TreeNode) => {
        // Base case: if the node has no children, its total child count is 0
        if (!node.children || node.children.length === 0) {
            return 0;
        }

        // Initialize the count with the number of direct children
        let totalChildren = node.children.length;

        // Recursively add the children count for each child node
        for (const child of node.children) {
            totalChildren += calculateTotalChildren(child);
        }

        return totalChildren;
    };

    const maxChildren = nodes.max;
    const numChildren = calculateTotalChildren(nodes)//nodes.children ? nodes.children.length : 0;

    const progress = (numChildren / maxChildren) * 100;



    return <TreeItem
        sx={{ m: 5 }}
        key={nodes.id}
        itemId={String(nodes.id)}
        label={
            <Card className='shadow-none '>
                <CardContent className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex flex-grow items-center gap-4'>
                            <Avatar alt={nodes.name} style={{ marginRight: 10 }} />
                            <div className='flex-grow'>
                                <Typography className='font-medium' color='text.primary'>
                                    {nodes.name}
                                </Typography>
                                <Typography variant='body2'>{nodes.mobile}</Typography>
                            </div>
                            <Box display="flex" alignItems="center" flexDirection="column">
                                <CircularProgress
                                    size={50}
                                    value={100}
                                    thickness={6}
                                    variant='determinate'
                                    sx={{
                                        position: 'absolute',
                                        color: 'customColors.trackBg',
                                        '& .MuiCircularProgress-circle': { strokeWidth: 6 }
                                    }}
                                />
                                <CircularProgress
                                    size={50}
                                    thickness={6}
                                    variant='determinate'
                                    value={progress}
                                    sx={{ '& .MuiCircularProgress-circle': { strokeWidth: 6, strokeLinecap: 'round' } }}
                                />
                                {/* <CircularProgress variant="determinate" value={progress} size={40} thickness={4} /> */}
                                <Typography variant="caption" color="text.secondary">
                                    {numChildren} of {maxChildren} connection
                                </Typography>
                            </Box>

                        </div>
                    </div>
                </CardContent>
            </Card>
        }
    >
        {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderTree(node))
            : null}
    </TreeItem>
};

const TreeComponent: React.FC = () => {
    return (
        <TreeView>
            {renderTree(data)}
        </TreeView>
    );
};

export default TreeComponent;
