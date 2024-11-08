import { SongInstace } from '@/views/discover/c-views/SongInstace';
import { deleteData, getSongList2 } from '@/views/discover/c-views/recommend/service';
import { getData, saveData } from '@/views/discover/c-views/indexedDbService';
import { requireRole } from '@/views/discover/c-views/decorate';

export class dj extends SongInstace {
  coverImgUrl: string;
  description: string;
  changedId: string; // 直接保存脱敏后的 ID

  constructor(id: number, name: string, picUrl: string, description: string, coverImgId: number) {
    super(id, name);
    this.coverImgUrl = picUrl;
    this.description = description;
    this.changedId = this.maskCoverImgId(coverImgId); // 直接生成并保存脱敏后的 ID
  }

  // 脱敏方法：隐藏 ID 的最后四位
  private maskCoverImgId(coverImgId: number): string {
    const idStr = coverImgId.toString();
    return idStr.slice(0, -4) + '****'; // 隐藏最后四位
  }

  // 静态方法：获取数据，先从本地数据库查找
  static async fetchDjList(): Promise<dj[]> {
    const data = await getData('djList');
    if (data.length > 0) {
      return data.map(
        (item: {
          id: number;
          name: string;
          coverImgUrl: string;
          description: string;
          changedId: string;
        }) =>
          new dj(
            item.id,
            item.name,
            item.coverImgUrl,
            item.description,
            parseInt(item.changedId.slice(0, -4))
          )
      );
    }
    const es = await getSongList2();
    const djList = es.playlists.map(
      (item: { id: number; name: string; coverImgUrl: string; coverImgId: number }) =>
        new dj(item.id, item.name, item.coverImgUrl, '电台小精灵', item.coverImgId)
    );
    await saveData(
      'djList',
      djList.map((djitem: dj) => ({
        id: djitem.id,
        name: djitem.name,
        coverImgUrl: djitem.coverImgUrl,
        description: djitem.description,
        changedId: djitem.changedId
      }))
    );
    return djList;
  }

  // 静态方法：删除指定的 dj 项目
  // 私有方法：实际的删除操作
  @requireRole('admin')
  private static async deleteDjItemInternal(id: number): Promise<void> {
    console.log(`Deleting item with ID: ${id}`);
    await deleteData('djList', id);
    console.log(`Item with ID ${id} deleted successfully from IndexedDB.`);
  }

  // 公共方法：带权限检查后调用私有的删除方法
  static async deleteWithAuthorization(id: number, userRole: string): Promise<void> {
    if (userRole !== 'admin') {
      throw new Error('Access denied. Only admins can delete items.');
    }

    await this.deleteDjItemInternal(id);
  }
}
