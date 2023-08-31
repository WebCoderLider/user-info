const express = require('express');
const router = express.Router();
const pool = require('../db'); // Malumotlar bazasi ulanishini import qilamiz
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// CREATE (Yaratish)
router.post('/', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), async (req, res) => {
    console.log(object)
    try {
        const {
            username,
            ismi,
            familyasi,
            email,
            phoneNumber,
            phoneNumber2,
            telegramUsername,
            telegramGroup,
            telegramChannel,
            instagramUsername,
            instagramUsername2,
            youtubeChannel,
            manzil,
            moshinaNomeri,
            otaOnasiIsmFamilyasi,
            qayerdaOqishi,
            pasportJshir,
            pasportSeriyaRaqami,
            pasportRasmi,
            isJoyi,
            qoshimchaMalumot,
        } = req.body;

        // Rasim fayllarining nomi multer tomonidan saqlangan fayl nomi bilan bir xil bo'ladi
        const image1FileName = req.files['image1'][0].filename;
        const image2FileName = req.files['image2'][0].filename;

        const query = `
      INSERT INTO users
      (username, ismi, familyasi, email, phone_number, phone_number2, image1, image2,
      telegram_username, telegram_group, telegram_channel, instagram_username, instagram_username2,
      youtube_channel, manzil, moshina_nomeri, ota_onasi_ism_familyasi, qayerda_oqishi,
      pasport_jshir, pasport_seriya_raqami, pasport_rasmi, is_joyi, qoshimcha_malumot)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
      RETURNING *;
    `;

        const values = [
            username,
            ismi,
            familyasi,
            email,
            phoneNumber,
            phoneNumber2,
            image1FileName,
            image2FileName,
            telegramUsername,
            telegramGroup,
            telegramChannel,
            instagramUsername,
            instagramUsername2,
            youtubeChannel,
            manzil,
            moshinaNomeri,
            otaOnasiIsmFamilyasi,
            qayerdaOqishi,
            pasportJshir,
            pasportSeriyaRaqami,
            pasportRasmi,
            isJoyi,
            qoshimchaMalumot,
        ];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// READ (O'qish)
router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM users;';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// UPDATE (Tahrirlash)
router.put('/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), async (req, res) => {
    try {
        const userId = req.params.id;
        const {
            username,
            ismi,
            familyasi,
            email,
            phoneNumber,
            phoneNumber2,
            telegramUsername,
            telegramGroup,
            telegramChannel,
            instagramUsername,
            instagramUsername2,
            youtubeChannel,
            manzil,
            moshinaNomeri,
            otaOnasiIsmFamilyasi,
            qayerdaOqishi,
            pasportJshir,
            pasportSeriyaRaqami,
            pasportRasmi,
            isJoyi,
            qoshimchaMalumot,
        } = req.body;

        // Rasim fayllarining nomi multer tomonidan saqlangan fayl nomi bilan bir xil bo'ladi
        const image1FileName = req.files['image1'][0].filename;
        const image2FileName = req.files['image2'][0].filename;

        const query = `
        UPDATE users
        SET
          username = $2,
          ismi = $3,
          familyasi = $4,
          email = $5,
          phone_number = $6,
          phone_number2 = $7,
          image1 = $8,
          image2 = $9,
          telegram_username = $10,
          telegram_group = $11,
          telegram_channel = $12,
          instagram_username = $13,
          instagram_username2 = $14,
          youtube_channel = $15,
          manzil = $16,
          moshina_nomeri = $17,
          ota_onasi_ism_familyasi = $18,
          qayerda_oqishi = $19,
          pasport_jshir = $20,
          pasport_seriya_raqami = $21,
          pasport_rasmi = $22,
          is_joyi = $23,
          qoshimcha_malumot = $24
        WHERE id = $1
        RETURNING *;
      `;

        const values = [
            userId,
            username,
            ismi,
            familyasi,
            email,
            phoneNumber,
            phoneNumber2,
            image1FileName,
            image2FileName,
            telegramUsername,
            telegramGroup,
            telegramChannel,
            instagramUsername,
            instagramUsername2,
            youtubeChannel,
            manzil,
            moshinaNomeri,
            otaOnasiIsmFamilyasi,
            qayerdaOqishi,
            pasportJshir,
            pasportSeriyaRaqami,
            pasportRasmi,
            isJoyi,
            qoshimchaMalumot,
        ];

        const result = await pool.query(query, values);

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE (O'chirish)
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const query = 'DELETE FROM users WHERE id = $1;';
        const result = await pool.query(query, [userId]);

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;



// username,
// ismi,
// familyasi,
// email,
// phone_number,
// phone_number2,
// image1, image2,
// telegram_username,
// telegram_group,
// telegram_channel,
// instagram_username,
// instagram_username2,
// youtube_channel,
// manzil,
// moshina_nomeri,
// ota_onasi_ism_familyasi,
// qayerda_oqishi,
// pasport_jshir,
// pasport_seriya_raqami,
// pasport_rasmi, is_joyi,
// qoshimcha_malumot