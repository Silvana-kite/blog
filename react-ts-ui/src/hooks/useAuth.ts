// 创建高阶组件实现权限控制：
// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => useContext(AuthContext);
