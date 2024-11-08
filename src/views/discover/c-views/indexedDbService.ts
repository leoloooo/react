import { openDB, IDBPDatabase } from 'idb';

let dbPromise: Promise<IDBPDatabase>;

// 初始化数据库并创建指定的对象存储
async function initDB() {
  if (!dbPromise) {
    dbPromise = openDB('AppDatabase', 2, {
      // 更新版本号为 2
      upgrade(db) {
        // 在数据库升级时创建需要的对象存储
        if (!db.objectStoreNames.contains('djList')) {
          db.createObjectStore('djList', { keyPath: 'id' });
        }
      }
    });
  }
  return dbPromise;
}

// 获取指定的对象存储
async function getObjectStore(storeName: string, mode: 'readonly' | 'readwrite') {
  const db = await initDB();
  if (!db.objectStoreNames.contains(storeName)) {
    throw new Error(`Object store ${storeName} does not exist.`);
  }
  return db.transaction(storeName, mode).objectStore(storeName);
}

// 保存数据到指定对象存储
export async function saveData(storeName: string, data: any[]) {
  try {
    const db = await initDB();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);

    for (const item of data) {
      await store.put(item);
    }

    await tx.done;
    console.log(`Data saved to store: ${storeName}`);
  } catch (error) {
    console.error(`Failed to save data to store ${storeName}:`, error);
  }
}

// 从指定对象存储中读取所有数据
export async function getData(storeName: string) {
  try {
    const store = await getObjectStore(storeName, 'readonly');
    const data = await store.getAll();
    console.log(`Data retrieved from store: ${storeName}`, data);
    return data;
  } catch (error) {
    console.error(`Failed to retrieve data from store ${storeName}:`, error);
    return [];
  }
}
