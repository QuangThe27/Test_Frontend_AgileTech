import classname from 'classnames/bind';
import styles from './ManageProfile.module.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Input, Select, Table, Space, Pagination } from 'antd'; // Import Ant Design components
import { EditOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons'; // Import icons

const { Option } = Select;
const cx = classname.bind(styles);

const dataSource = Array.from({ length: 8 }, (_, i) => ({
    key: String(i + 1),
    id: i + 1,
    title: 'ABC',
    description: 'Description',
    tags: 'HTML, CSS',
}));

// Định nghĩa cột cho bảng
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 80,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
    },
    {
        title: 'Actions',
        key: 'actions',
        width: 100,
        render: (_, record) => (
            <Space size="middle">
                <EditOutlined className={cx('action-icon')} />
                <DeleteOutlined className={cx('action-icon')} />
            </Space>
        ),
    },
];

function ManageProfile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('Action')}>
                <ButtonComponent
                    textButton="Add now"
                    backgroundColor="rgba(156, 105, 226, 1)"
                    width="252px"
                    height="58px"
                    border="none"
                    borderRadius="50px"
                    size="1.6rem"
                    weight="500"
                    padding="0"
                />
                <div className={cx('search-filters')}>
                    <Input placeholder="Title" className={cx('filter-input')} />
                    <Select defaultValue="Tags" className={cx('filter-select')} suffixIcon={<DownOutlined />}>
                        <Option value="Tags">Tags</Option>
                        <Option value="HTML">HTML</Option>
                        <Option value="CSS">CSS</Option>
                    </Select>
                </div>
            </div>
            <div className={cx('container')}>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false} // Tắt pagination mặc định của Ant Design Table
                    className={cx('data-table')}
                />
            </div>
            <div className={cx('pagination-area')}>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    pageSize={10}
                    showSizeChanger={false}
                    className={cx('custom-pagination')}
                />
            </div>
        </div>
    );
}

export default ManageProfile;
