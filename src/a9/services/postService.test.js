import {
    postJob,
    deletePost, createJob, deleteJobPost, fetchAllJobPost
} from "./postService";

describe('postJob', () => {
    const testJobPost = {
        title: "Data Analyst",
    }

    beforeAll(() => {
            return deleteJobPost(testJobPost.id);
        }
    );

    afterAll(() => {
            return deleteJobPost(testJobPost.id);
        }
    );

    test('can post job with REST API', async () => {
        const newPost = await createJob(testJobPost);
        expect(newPost.title).toEqual(testJobPost.title);
    });
});


describe('fetchAllPosts', () => {
    const testJobPost1 = {
        title: "Data Analyst",
    }

    const testJobPost2 = {
        title: "Software engineer",
    }

    beforeAll(async () => {
            await deleteJobPost(testJobPost1.id);
            await deleteJobPost(testJobPost2.id);
            await createJob(testJobPost1);
            return createJob(testJobPost2);
        }
    );

    afterAll(async () => {
            await deleteJobPost(testJobPost1.id);
            return deleteJobPost(testJobPost2.id);
        }
    );

    test('can find all post with REST API', async () => {
        const allPost = await fetchAllJobPost();
        expect(allPost.length).toBeGreaterThanOrEqual(2);

        const post1WeInserted = await allPost.filter(
            post => post.title === testJobPost1.title);

        await expect(post1WeInserted[0].title).toEqual(testJobPost1.title);

        const post2WeInserted = await allPost.filter(
            post => post.title === testJobPost2.title);
        await expect(post2WeInserted[0].title).toEqual(testJobPost2.title);

    });
});
