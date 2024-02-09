import BlogPage from '../pages/blog-page'

describe("Blog", () => {
    it ('Numbers of item', async () => {
        await BlogPage.open();

        const items = await BlogPage.listRecentPosts;

        for (const item of items) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        await expect(items).toHaveLength(5);
    })
});