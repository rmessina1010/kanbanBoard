const projects = [
    {
        id: 1,
        title: 'project1',
        type: null,
        open: true,
        nextItem: 8,
        nextCol: 5,
        colOrd: [1, 2, 3, 4],
        cols: {
            1: {
                colTitle: 'one',
                colId: 1,
                items: [{
                    id: 1,
                    item: 'item1',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 2,
                    item: 'item2',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 3,
                    item: 'item3',
                    desc: 'Lorem Ipsum',
                    img: null,
                    status: false,
                },
                {
                    id: 4,
                    item: 'item4',
                    desc: 'code improvement',
                    img: null,
                    status: false,
                },
                {
                    id: 5,
                    item: 'item5',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 6,
                    item: 'item6',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                }]
            },

            2: {
                colTitle: 'two',
                colId: 2,
                items: [
                    {
                        id: 7,
                        item: 'item1',
                        desc: 'bla blah',
                        img: null,
                        status: false,
                    }]
            },
            3: {
                colTitle: 'three',
                colId: 3,
                items: []
            },
            4: {
                colTitle: 'four',
                colId: 4,
                items: []
            }
        }
    },
    {
        id: 2,
        title: 'project2',
        type: null,
        open: true,
        nextItem: 2,
        nextCol: 2,
        colOrd: [1],
        cols: {
            1: {
                colTitle: 'one',
                colId: 1,
                next: 1,
                items: []
            }

        }
    }

];

export default projects;